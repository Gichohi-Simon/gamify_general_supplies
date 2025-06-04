import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import orderRoutes from './routes/order.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'

const app = express();

dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

app.use('/order', orderRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}🔥`);
});
