export interface userState {
  id?: number;
  email: string;
  username: string;
  password: string;
}

export interface userIdinterface {
  userId: number;
}

export interface initialFormValuesInterface {
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface loginInitialValues {
  email: string;
  password: string;
}

export interface userInterface {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface postsInterface {
  id?: number;
  name: string;
  price: number;
  image: string;
  createdAt?: string;
  cloudinary_id?: string;
}

export interface OrderType {
  id: number;
  userId: number;
  itemsPrice:number,
  shippingPrice:number,
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliverAt: string;
  invoiceNumber: string;
  createdAt: string;
  orderItems: OrderItem[];
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: string;
  product: {
    name: string;
    image: string;
  };
};

export interface OrderItemInput {
  productId:number;
  quantity:number;
}
