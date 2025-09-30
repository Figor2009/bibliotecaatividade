import Router from "express";
import {
  criarUsuario,
} from "../controllers/usuarios-controller.js";

const roteador = Router();

roteador.post("/register", (req, res) => {
  criarUsuario(req, res);
  res.status(201).json({ message: "Usuário criado" });
});

export default roteador;