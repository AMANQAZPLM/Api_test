import express from "express";
import { controllerget, controllerpost } from "./controller/handler.js";
const app = express();

app.use(express.json());

app.get("/bfhl", controllerget);
app.post("/bfhl", controllerpost);

app.listen(3000, () => {
  console.log("Server running");
});
