import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      res.status(201).json({ status: `User ${id} create` });
      return;
    }

    res.status(400).json({ status: `User not create` });
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

  delete(req:Request, res:Response){
    const { id } = req.params;
    res.status(200).json({status: `User ${id} deleted`});
  }
};
