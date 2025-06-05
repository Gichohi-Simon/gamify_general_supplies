import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async (req, res) => {
  const { image, name, price } = req.body;
  try {
    if (!image || !name || !price) {
      return res.status(400).json({ error: "all fields are required" });
    }
    
    const newProduct = await prisma.product.create({
      data: {
        image,
        name,
        price,
      },
    });

    res.status(201).json({ newProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json({ singleProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
