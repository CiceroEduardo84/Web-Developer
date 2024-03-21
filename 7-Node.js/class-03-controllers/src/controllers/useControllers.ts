import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        // console.log(a);
        return res.status(201).json({ status: `User ${id} create` });
      }

      throw res.status(400).json({ status: `User not create` });
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ user: id });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("Updated", { id, name, age });
      res.status(200).json({ status: `User ${id} updated` });
      return;
    }

    res.status(400).json({ status: "User not updated" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ status: `User ${id} deleted` });
  },
};
