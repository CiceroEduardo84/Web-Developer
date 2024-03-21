import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, password } = req.body;
      const db = await sqliteConnection();
      await db.run(
        "INSERT INTO users (Id, name, email, password) VALUES (?,?,?,?);",
        [id, name, email, password]
      );

      return res.json({ message: "created!", id });
    } catch (error) {
      next(error);
    }
  },

  async read(req: Request, res: Response,) {
    res.send({ message: "read!" });
  },

  async update(req: Request, res: Response) {
    res.send({ message: "updated!" });
  },

  async delete(req: Request, res: Response) {
    res.send({ message: "deleted!" });
  },
};
