import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "all fields are required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        msg: "user already exists",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const savedUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    delete savedUser.password;

    res.status(201).json({ savedUser });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send("login");
};
