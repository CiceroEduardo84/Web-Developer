import { Router } from "express";
import { userControllers } from "../controllers";

export const routers = Router();

routers.post("/user",userControllers.create);
routers.get("/user/:id",userControllers.read);
routers.put("/user/:id",userControllers.update);
routers.delete("/user/:id",userControllers.delete);