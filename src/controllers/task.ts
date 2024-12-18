import { Request, Response } from "express";
import { prisma } from "../index";

const test = async (req: Request, res: Response) => {
  console.log(req);
  res.status(200).json({ message: "hello" });
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color, priority } = req.body;
    const newTask = await prisma.task.create({
      data: {
        title,
        color: color.toUpperCase(),
        priority: priority.toUpperCase(),
      },
    });
    res.status(200).json(newTask);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, color, priority } = req.body;
    let { completed } = req.body;
    let completedAt = null;
    if (completed === "true") {
      completed = true;
      completedAt = new Date();
    }
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        color: color.toUpperCase(),
        priority: priority.toUpperCase(),
        completed,
        completedAt,
      },
    });
    res.status(200).json(updatedTask);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTask = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedTask);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  test,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
