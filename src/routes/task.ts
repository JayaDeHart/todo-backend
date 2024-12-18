import express, { Router } from "express";
import taskController from "../controllers/task";
import { defaultMaxListeners } from "events";

const taskRouter = express.Router();

taskRouter.get("/test", taskController.test);

taskRouter.get("/", taskController.getTasks);

taskRouter.post("/", taskController.createTask);

taskRouter.put("/:id", taskController.updateTask);

taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
