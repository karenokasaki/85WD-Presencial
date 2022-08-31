import { useState } from "react";
import Posts from "../Posts";

function Form({ posts, setPosts }) {
  const [form, setForm] = useState({
    about: "",
    lvlDif: "",
    onLimit: false,
    nickname: "",
    message: "",
  });

  function handleChange(e) {
    if (e.target.name === "onLimit") {
      console.log("dentro do if");
      setForm({ ...form, onLimit: e.target.checked });
      return;
    }

    console.log("fora do if");
    //setForm({ ...form, nomeDaChave: valorDaChave });
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    //adicionar o state FORM dentro da array posts
    let updatedPosts = [...posts, form];

    setPosts(updatedPosts);

    setForm({
      about: "",
      lvlDif: "",
      onLimit: false,
      nickname: "",
      message: "",
    });
  }

  console.log(form);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>About</label>
        <input
          name="about"
          type="text"
          value={form.about}
          onChange={handleChange}
          required
        />

        <label>Nível de Dificuldade</label>
        <select name="lvlDif" onChange={handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label>NickName</label>
        <input
          name="nickname"
          type="text"
          value={form.nickname}
          onChange={handleChange}
          required
        />

        <label>Messagem</label>
        <input
          name="message"
          type="text"
          value={form.message}
          onChange={handleChange}
          required
        />

        <label>Você está no limite?</label>
        <input
          type="checkbox"
          name="onLimit"
          value={form.onLimit}
          onChange={handleChange}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Form;
