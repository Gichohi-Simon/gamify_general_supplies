import express from "express";
import {
  deleteAccount,
  deleteUser,
  getActiveUsers,
  getAllUsers,
  getDeletedAccounts,
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
router.get("/getActiveusers", authenticate,authorizeAdmin ,getActiveUsers);
router.get("/getDeletedAccounts", authenticate, authorizeAdmin, getDeletedAccounts);
router.patch("/delete-account", authenticate, deleteAccount)
router.patch("/deleteUser/:id", authenticate, authorizeAdmin, deleteUser);
router.patch("/makeAdmin/:id", authenticate, authorizeAdmin, makeAdmin);
router.patch("/removeAdmin/:id", authenticate, authorizeAdmin, removeAdmin);


export default router;
