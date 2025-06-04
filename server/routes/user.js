import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  makeAdmin,
  removeAdmin,
} from "../controllers/userController.js";
import {
  authenticate,
  authorizeAdmin,
} from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.get("/allUsers", authenticate, authorizeAdmin, getAllUsers);
router.get("/getSingleUser", authenticate, authorizeAdmin, getSingleUser);
router.delete("/deleteUser/:id", authenticate, authorizeAdmin, deleteUser);
router.patch("/makeAdmin/:id", authenticate, authorizeAdmin, makeAdmin);
router.patch("/removeAdmin/:id", authenticate, authorizeAdmin, removeAdmin);

export default router;
