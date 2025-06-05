import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function calcPrices(orderItems) {
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const shippingPrice = 0;
  const taxRate = 0.16;
  const taxPrice = (itemsPrice * taxRate).toFixed(2);

  const totalPrice = (
    itemsPrice +
    shippingPrice +
    parseFloat(taxPrice)
  ).toFixed(2);

  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
}

export const createOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    const userId = req.user?.id;

    if (!orderItems || orderItems.length === 0) {
      res.status(400).json({ message: "not order items" });
    }

    const productIds = orderItems.map((item) => item.productId);
    // fetches product from db for validation (price, existence)
    const dbProducts = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    // map client items to db products to check for missing items in db
    const dbOrderItems = orderItems.map((item) => {
      const dbProduct = dbProducts.find((p) => p.id === item.productId);
      if (!dbProduct) {
        return res
          .status(400)
          .json({ error: `product not found ${item.productId}` });
      }

      return {
        productId: dbProduct.id,
        quantity: item.quantity,
        price: dbProduct.price,
      };
    });

    const { taxPrice, totalPrice } = calcPrices(dbOrderItems);

    const createOrder = await prisma.order.create({
      data: {
        userId,
        taxPrice: Number(taxPrice),
        totalPrice: Number(totalPrice),
        orderItems: {
          create: dbOrderItems,
        },
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    res.status(201).json({ createOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleUserOrders = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const singleUserOrders = await prisma.order.findMany({
      where: {
        userId,
      },
    });
    res.status(200).json({ singleUserOrders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCurrentUserOrders = async (req, res) => {
  const userId = req.user.id;
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId,
      },
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalOrders = async (req, res) => {
  try {
    const totalOrders = await prisma.order.count();
    res.status(200).json({ totalOrders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalSales = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    res.status(200).json({
      totalSales,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const markOrderAsDelivered = async (req, res) => {
  const orderId = parseInt(req.params.orderId);
  try {
    const delivered = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        isDelivered: true,
        deliveredAt: new Date()
      },
    });
    res.status(201).json({ delivered });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const markOrderAsPaid = async (req, res) => {
  const orderId = parseInt(req.params.orderId);
  try {
    const paidProduct = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        isPaid: true,
        paidAt: new Date()
      },
    });
    res.status(201).json({ paidProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
