import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/productController.js";
import {
  authorizeAdmin,
  authenticate,
} from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.post("/create-product", authenticate, authorizeAdmin, createProduct);
router.get("/all-products", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;
