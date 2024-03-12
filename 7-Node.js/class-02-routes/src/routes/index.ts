import { Router } from "express";

export const router = Router();

router.get("/", (_req, res) => {
  res.send({ name: "Eduardo" });
});

router.get("/pokemon", (_req, res) => {
  res.send([
    { id: 123, name: "Bubasaur" },
    { id: 3737, name: "Mew" },
    { id: 239, name: "Charizard" },
  ]);
});
