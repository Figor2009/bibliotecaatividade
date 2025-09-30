import Router from "express";
import {
  criarLivro,
} from "../controllers/livros-controller.js";

const roteadorLivro = Router();

roteadorLivro.post("/", (req, res) => {
  criarLivro(req, res);
  res.status(201).json({ message: "Livro criado" });
});

export default roteadorLivro;