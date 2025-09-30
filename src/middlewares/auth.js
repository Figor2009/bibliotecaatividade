export function verifyUser(req, res, next) {
  console.log("Verificando usuário...");

    const headers = req.headers;
    console.log(headers);

    const auth = req.headers.authorization;
    console.log(auth);

    if(!auth.startsWith('Basic')){
        return res.status(400).json({mensagem: "Tipo de autenticação inválida"});
    }

    const conteudo_do_token = auth.split(" ")[1];
    console.log(conteudo_do_token);

    const token_descriptografado = Buffer.from(conteudo_do_token, 'base64').toString();

    console.log(token_descriptografado);

    const usuario = token_descriptografado.split(":")[0];

    next();
    //const usuario = await Prisma.users.findUnique({ id: id});
}