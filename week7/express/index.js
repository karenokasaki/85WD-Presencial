// importando o express para o arquivo
const express = require("express");

//importando cors
const cors = require("cors")

//instanciando o express na variável APP
const app = express();
app.use(cors({origin: "http://localhost:3000"}))

//configurando o nosso servidor para receber e enviar arquivos em JSON
app.use(express.json());

//ROTAS
const array = [
  "fabio",
  "andrea",
  "rodrigo",
  "bruno",
  "anna",
  "doug",
  "vitor",
  "pedro",
  "tami",
  "leo",
  "jonathan",
];

//app + verbo http (get, delete, put, patch, post)
app.get("/student", (req, res, next) => {
  //req = requisição = pedido = o que foi solicitado
  //res = resposta = response = o que o servidor vai DEVOLVER pro client
  //next = é usado para fazer MIDDLEWARES
  console.log("estou dentro da rota get /students");

  //return porque toda função PRECISA DE UM RETURN
  return res.status(200).json(array);
});

app.get("/randomNumber", (req, res, next) => {
  const result = Math.round(Math.random() * 100);

  return res.status(200).json(result);
});

//criar uma rota que vai receber um parametro e vamos usar esse parametro para achar um numero aleatório

app.get("/randomNumber/:max", (req, res) => {
  console.log("req params", req.params);

  const { max } = req.params;
  console.log(max);

  const result = Math.round(Math.random() * max);

  return res.status(200).json(result);
});

app.post("/addStudent/:name", (req, res) => {
  const { name } = req.params;

  array.push(name);

  return res.status(201).json(array);
});

let students = [
  { name: "fabio", age: 44 },
  { name: "jino", age: 29 },
  { name: "rodrigo", age: 31 },
  { name: "doug", age: 32 },
];

app.get("/students", (req, res) => {
  return res.status(200).json(students);
});

app.post("/students/add", (req, res) => {
  const form = req.body;

  students.push(form);

  return res.status(201).json(students);
});

app.put("/students/edit/:name", (req, res) => {
  const { name } = req.params;

  students.forEach((student, index) => {
    if (student.name === name) {
      students[index] = { ...student, ...req.body };
    }
  });

  return res.status(200).json(students);
});

app.delete("/students/delete/:name", (req, res) => {
  const { name } = req.params;

  const newArray = students.filter((student) => {
    return student.name !== name;
  });

  students = newArray;

  return res.status(200).json(students);
});

let allPokemon = require("./data");

app.get("/search", (req, res, next) => {
  let foundPokemon = [];

  if (req.query.name) {
    console.log("Sim, estão procurando por NOME");

    allPokemon.forEach((pokemon) => {
      if (pokemon.name === req.query.name) {
        foundPokemon.push(pokemon);
      }
    });
  }

  return res.status(200).json(foundPokemon);
});

app.listen(4000, () => {
  console.log("Server up and running on port: 4000");
});
