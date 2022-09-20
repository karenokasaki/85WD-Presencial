const express = require("express"); //importando o framework
require("dotenv").config(); // configurando o DOTENV (process.env.ALGO)
const cors = require("cors"); // mporto o cors

const dbConnection = require("./config/db.config"); // importo a função de conexão com DB
dbConnection(); // invocando a função importada

const app = express(); //instancio o EXPRESS
app.use(express.json()); //permite troca de JSON
app.use(cors({ origin: process.env.REACT_APP_URI })); //configura o cors para aceitar requisições dessa URI (react)

//NOSSAS ROTAS VÃO AQUI

const AlunosRoute = require("./routes/alunos.routes");
app.use("/alunos", AlunosRoute);



//nosso servidor ouvindo na porta 4000
app.listen(process.env.PORT, () => {
  console.log("Server up and running on port", process.env.PORT);
});
