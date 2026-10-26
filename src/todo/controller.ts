import { Request, Response } from "express";
import type { Todo } from "../validation/todo.Schema.js";

class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }
}

export default TodoController;
