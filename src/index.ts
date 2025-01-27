import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import taskRouter from "./routes/task";
import cors from "cors";

export const prisma = new PrismaClient();
const app = express();
const port = 8000;

async function start() {
  app.use(cors());
  app.use(express.json());
  app.use("/api/tasks", taskRouter);

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`);
  });
}

start()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
