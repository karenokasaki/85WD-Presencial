const express = require("express");
const router = express.Router();

const AlunoModel = require("../models/aluno.models");

//criar um aluno
router.post("/create", async (req, res) => {
  try {
    const newAluno = await AlunoModel.create({ ...req.body });

    return res.status(201).json(newAluno);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allAlunos = await AlunoModel.find();

    return res.status(200).json(allAlunos);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/aluno/:id", async (req, res) => {
  try {
    const { id } = req.params;

    //const oneAluno = await AlunoModel.find({ _id: id });
    const outroAluno = await AlunoModel.findById(id);

    return res.status(200).json(outroAluno);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
