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

//route params(obrigatorio)
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send({ id });
});

// query params
router.get("/user", (req, res) => {
  const { id, name, age } = req.query;
  res.send({ id, name, age });
});

//body params
router.post("/user", (req, res) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  res.send({status:"User create!"});
});
