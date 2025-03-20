import { Request, Response } from "express";
import prisma from "../config/db";

// GET all data
export const getData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.data.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

// POST new data
export const createData = async (req: Request, res: Response) => {
  try {
    const { name, value } = req.body;
    const newData = await prisma.data.create({
      data: { name, value },
    });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to store data" });
  }
};
