import express from "express";
import { deleteUser, getAllUsers, getSingleUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.get("/allUsers", authenticate, getAllUsers);
router.get("/getSingleUser", authenticate, getSingleUser);
router.delete('/deleteUser/:id', authenticate, deleteUser);

export default router;
