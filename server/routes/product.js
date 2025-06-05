import express from "express";
import {
  createProduct,
  deleteSingleProduct,
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
router.delete("/:id", authenticate, authorizeAdmin, deleteSingleProduct);

export default router;
