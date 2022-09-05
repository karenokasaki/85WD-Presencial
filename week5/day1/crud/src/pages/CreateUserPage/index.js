import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUserPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    type: "",
    sign: "",
  });

  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.herokuapp.com/wd-85-ft", form);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);
  return (
    <div>
      <h1>Pagina de criação</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input name="name" value={form.name} onChange={handleChange} />

        <label>Idade</label>
        <input name="age" value={form.age} onChange={handleChange} />

        <label>Signo</label>
        <input name="sign" value={form.sign} onChange={handleChange} />

        <label>Tipo</label>
        <select name="type" onChange={handleChange}>
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
          <option value="ta">Ta</option>
        </select>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CreateUserPage;
