import { Router } from "express";
import { getData, createData } from "../controllers/data.controller";

const router = Router();

// Read data
router.get("/", getData);

// Write data
router.post("/", createData);

export default router;
