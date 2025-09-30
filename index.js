import express from "express";
import roteador from "./src/routes/auth.js";
import roteadorLivro from "./src/routes/books.js";
import { verifyUser } from "./src/middlewares/auth.js";

const app = express();
app.use(express.json());

app.use(verifyUser);
app.use("/auth", roteador);

app.use("/books", roteadorLivro);


app.listen(8000, () => {
  console.log("API rodando na porta 8000");
});