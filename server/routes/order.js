import express from "express";
import {
  createOrder,
  getAllOrders,
  getCurrentUserOrders,
  getSingleUserOrders,
} from "../controllers/orderController.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/create-order", authenticate, createOrder);
router.get("/allOrders", authenticate, authorizeAdmin, getAllOrders);
router.get("/get-current-user-orders", authenticate, getCurrentUserOrders);
router.get(
  "/singleUser-orders/:id",
  authenticate,
  authorizeAdmin,
  getSingleUserOrders
);

export default router;
