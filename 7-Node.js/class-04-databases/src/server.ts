import express from "express";
import { routers } from "./routes";
import { sqliteConnection } from "./databases/sqlite3";

const app = express();
const port = 3000;

app.use(routers);

app.listen(port, () => {
  console.log(`Server is running on Port: http://localhost:${port}/`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error(error));
