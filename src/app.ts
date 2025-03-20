import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/data.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/data", dataRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
