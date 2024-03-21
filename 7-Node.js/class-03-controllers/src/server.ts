import express from "express";
import { router } from "./routes";
import { appErros } from "./middlewares/appErrors";
import { pageNotFoundError } from "./middlewares/pageNotFoundError";

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(router);

app.use(pageNotFoundError);
app.use(appErros);

app.listen(port, () => {
  console.log(`Server is running on PORT: http://localhost:${port}/`);
});
