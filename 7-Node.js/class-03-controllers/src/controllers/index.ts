import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      res.json({ status: `User ${id} create` });
      return;
    }
    
    res.json({ status: `User not create` });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ user: id });
  },
};
