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

export const getSingleUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    delete user.password;
    res.status(200).json({user})
  } catch (error) {
    res.status(400).json({
      error:error.message
    })
  }
};

export const deleteUser = async(req,res) => {
  const id = parseInt(req.params.id)
  try {
    const deletedUser = await prisma.user.delete({
      where:{
        id
      }
    })
    res.status(200).json({message:"user has been deleted"})
  } catch (error) {
    res.status(404).json({
      error:error.message
    })
  }
}
