import { Request, Response } from "express";
import type { Todo } from "../validation/todo.Schema.js";
import { todoValidationSchema } from "../validation/todo.Schema.js";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async handleInsertTodo(req: Request, res: Response) {
    try {
      const unValidated = req.body;
      const validationResult =
        await todoValidationSchema.parseAsync(unValidated);

      this._db.push(validationResult);
      return res.status(201).json({ todo: validationResult });
    } catch (error) {
      return res.status(500).json({ error: "Validation Failed!" });
    }
  }
}

export default TodoController;
