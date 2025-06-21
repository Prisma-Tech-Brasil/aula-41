require("dotenv").config();
const express = require("express");
const rotas = require("./routes");
const tratadorDeErros = require("./middleware/tratadorDeErros");
const server = express();
const cors = require("cors");

server.use(cors());

server.use(express.json());

server.use(rotas);

server.use((_req, res, _next) =>
  res.status(404).json({ erro: "Rota não existe" })
);

server.use(tratadorDeErros);

server.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
);
