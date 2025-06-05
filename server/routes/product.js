import express from "express";
import {
  createProduct,
  deleteSingleProduct,
  getAllProducts,
  getSingleProduct,
  searchProducts,
  updateProduct,
} from "../controllers/productController.js";
import {
  authorizeAdmin,
  authenticate,
} from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.post("/create-product", authenticate, authorizeAdmin, createProduct);
router.get("/all-products", getAllProducts);
router.get("/search", searchProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", authenticate, authorizeAdmin, deleteSingleProduct);
router.patch("/update-product/:id", authenticate, authorizeAdmin, updateProduct);

export default router;
