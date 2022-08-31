import { useState, useRef } from "react";
import Posts from "../Posts";
import { Input, Label, Button } from "reactstrap";

function Form({ posts, setPosts }) {
  const [form, setForm] = useState({
    about: "",
    lvlDif: "",
    onLimit: false,
    nickname: "",
    message: "",
  });

  let inputAbout = useRef();

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

    inputAbout.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label>About</Label>
        <input
          ref={inputAbout}
          name="about"
          type="text"
          value={form.about}
          onChange={handleChange}
          required
        />

        <Label>Nível de Dificuldade</Label>
        <Input type="select" name="lvlDif" onChange={handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>

        <Label>NickName</Label>
        <Input
          name="nickname"
          type="text"
          value={form.nickname}
          onChange={handleChange}
          required
        />

        <Label>Messagem</Label>
        <Input
          name="message"
          type="text"
          value={form.message}
          onChange={handleChange}
          required
        />

        <Label>Você está no limite?</Label>
        <Input
          type="checkbox"
          name="onLimit"
          value={form.onLimit}
          onChange={handleChange}
        />

        <Button color="success" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
}

export default Form;
