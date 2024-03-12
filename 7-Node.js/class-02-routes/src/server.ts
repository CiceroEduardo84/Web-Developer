import express from "express";
import { router } from "./routes";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT: http://localhost:${port}/`);
});

app.use(router);
