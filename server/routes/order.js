import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/create-order", authenticate, createOrder);
router.get("/allOrders", authenticate, authorizeAdmin, getAllOrders);

export default router;
