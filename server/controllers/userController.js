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

export const getSingleUser = async(req,res) => {
  const id = req.params.id;
  try {
    
  } catch (error) {
    
  }
}