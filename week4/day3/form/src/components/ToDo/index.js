import { useState } from "react";

function ToDo() {
  const [name, setName] = useState("karen");
  const [form, setForm] = useState("");

  function handleChange(e) {
    setForm(e.target.value);
    console.log(form);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(form);
    setForm("");
  }

  return (
    <>
      <h1>Uhul, hj é dia de form</h1>

      <p>{name}</p>

      <form onSubmit={handleSubmit}>
        <label>Escreva seu nome</label>
        <input autoFocus type="text" value={form} onChange={handleChange} />
        <button type="submit">Salve seu nome!</button>
      </form>
    </>
  );
}

export default ToDo;
