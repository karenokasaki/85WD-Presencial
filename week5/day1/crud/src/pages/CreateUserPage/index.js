import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

function CreateUserPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    type: "",
    sign: "",
    notes: [],
    questions: [],
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.herokuapp.com/wd-85-ft", form);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);
  return (
    <div className="d-flex flex-column">
      <h4 className="text-center">Crie seu perfil no nosso site</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-start text-muted fs-4 ">Nome</Form.Label>
          <Form.Control
            size="lg"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 text-muted">Idade</Form.Label>
          <Form.Control
            size="lg"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 text-muted">Signo</Form.Label>
          <Form.Control
            size="lg"
            name="sign"
            value={form.sign}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 text-muted">Tipo</Form.Label>
          <Form.Select name="type" onChange={handleChange} required>
            <option></option>
            <option value="professor">Professor</option>
            <option value="aluno">Aluno</option>
            <option value="ta">Ta</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button
            variant="success"
            size="md"
            type="submit"
            style={{ width: "100px" }}
          >
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateUserPage;
