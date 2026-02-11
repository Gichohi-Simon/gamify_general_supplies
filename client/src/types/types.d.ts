export type UserRole = "USER" | "ADMIN" | "EMPLOYEE";
export type AuthProvider = "LOCAL" | "GOOGLE";

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  authProvider: AuthProvider;
}

export type AuthUser = User;

export interface AuthState {
  userInfo: userState | null;
  initialized: boolean;
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
  id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface postsInterface {
  id: string;
  name: string;
  price: number;
  images: string[];
  createdAt: string;
  cloudinary_id: string;
  description: string;
  category: string;
}

export interface OrderType {
  id: string;
  userId: number;
  itemsPrice: number;
  shippingPrice: number;
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
  id: string;
  orderId: number;
  productId: number;
  quantity: number;
  price: string;
  product: {
    name: string;
    images: string;
  };
}

export interface OrderItemInput {
  productId: string;
  quantity: number;
}

export interface Address {
  id?: string;
  companyName: string;
  street: string;
  floorNumber: string;
  city: string;
  postalCode: string;
  phoneNumber?: string;
}

export interface UserAddressResponse {
  address: Address;
}

export interface DeleteResponse {
  message: string;
}
