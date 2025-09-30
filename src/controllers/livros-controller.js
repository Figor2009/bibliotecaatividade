import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function criarLivro(req, res) {
      console.log(req.body);
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ mensagem: "Título e autor são obrigatórios" });
  }

  try {
    const novoLivro = await prisma.users.create({
      data: {
        title,
        author,
      },
    });

    res.status(201).json(novoLivro);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mensagem: "Erro ao criar livro" });
  }
}