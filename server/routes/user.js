import express from 'express'
import { getAllUsers } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/allUsers', authenticate, getAllUsers)

export default router;