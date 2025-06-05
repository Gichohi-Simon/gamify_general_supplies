import express from "express";
import { createOrder } from "../controllers/orderController.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/create-order", authenticate, createOrder);

export default router;
