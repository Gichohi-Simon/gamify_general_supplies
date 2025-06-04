import express from "express";
import {
  login,
  logoutCurrentUser,
  signUp,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/login", login);
router.post("/sign-up", signUp);
router.post("/logout", logoutCurrentUser);

export default router;
