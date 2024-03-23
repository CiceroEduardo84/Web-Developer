import { Request, Response, NextFunction } from "express";
import { sqliteConnection } from "../databases/sqlite3";
import { randomUUID } from "node:crypto";
import { hash, compare } from "bcrypt";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const uuid = randomUUID();
      const db = await sqliteConnection();
      const passwordHash = await hash(password, 10);
      await db.run(
        "INSERT INTO users (Id, name, email, password) VALUES (?,?,?,?);",
        [uuid, name, email, passwordHash]
      );

      return res.status(201).json({ message: "created!", id: uuid });
    } catch (error) {
      next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      if (!password) {
        throw res
          .status(400)
          .json({ message: "Please, confirm your password!" });
      }

      const db = await sqliteConnection();
      const user = await db.get("SELECT * FROM users WHERE id = ?;", [id]);

      if (!user) throw res.status(404).json({ message: "User not found!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(400).json({ message: "Invalid password!" });
      }

      const { name, email } = user;

      return res.json({ name, email });
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response) {
    res.send({ message: "updated!" });
  },

  async delete(req: Request, res: Response) {
    res.send({ message: "deleted!" });
  },
};
