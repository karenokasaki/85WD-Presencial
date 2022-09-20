const mongoose = require("mongoose"); // importando o mongoose
const Schema = mongoose.Schema; // instancio a SCHEMA

const AlunoSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  age: { type: Number, min: 1 },
  course: {
    type: String,
    enum: ["wd-ft-presencial", "wd-ft-remoto", "wd-ft-empresas"],
  },
  nickname: { type: String, default: "melhor aluno da prof karen" },
  graduated: { type: Boolean, default: false },
});

const AlunoModel = mongoose.model("Aluno", AlunoSchema);

module.exports = AlunoModel;
