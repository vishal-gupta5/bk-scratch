import TodoController from "./controller.js";
import { Router } from "express";
const router = Router();

const controller = new TodoController();

router.get("/", controller.handleGetTodos.bind(controller));
router.post("/", controller.handleInsertTodo.bind(controller));

export default router;
