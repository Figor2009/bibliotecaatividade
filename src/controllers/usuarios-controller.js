import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function criarUsuario(req, res) {
      console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
  }

  try {
    const novoUsuario = await prisma.users.create({
      data: {
        username,
        password,
      },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mensagem: "Erro ao criar usuário" });
  }
}