import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getActiveUsers = async (req, res) => {
  try {
    const activeUsers = await prisma.user.findMany({
      where: {
        isActive: true,
      },
    });

    res.status(200).json({ activeUsers });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDeletedAccounts = async (req, res) => {
  try {
    const deletedAccounts = await prisma.user.findMany({
      where: {
        isActive: false,
      },
    });
    res.status(200).json({ deletedAccounts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    delete user.password;
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const deleteAccount = async (req, res) => {
  const id = parseInt(req.user.id);
  try {
    const deletedAccount = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });

    res.status(201).json({ deletedAccount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
    res.status(200).json({ deletedUser });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

export const makeAdmin = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isAdmin: true,
      },
    });
    delete user.password;

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const removeAdmin = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isAdmin: false,
      },
    });

    delete user.password;

    res.status(200).json({ user });
  } catch (error) {
    error: error.message;
  }
};
