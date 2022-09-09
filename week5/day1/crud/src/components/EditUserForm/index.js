import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function EditUserForm({
  form,
  studentID,
  setShowForm,
  setForm,
  reload,
  setReload,
  showForm,
}) {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete form._id;

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        form
      );

      setShowForm(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal show={showForm} onHide={() => setShowForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edite seu Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Nome</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} />

          <Form.Label>Idade</Form.Label>
          <Form.Control name="age" value={form.age} onChange={handleChange} />

          <Form.Label>Signo</Form.Label>
          <Form.Control name="sign" value={form.sign} onChange={handleChange} />

          <Form.Label>Tipo</Form.Label>
          <Form.Select
            name="type"
            onChange={handleChange}
            defaultValue={form.type}
          >
            <option value="professor">Professor</option>
            <option value="aluno">Aluno</option>
            <option value="ta">Ta</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Button
          variant="danger"
          className="text-light fw-semibold"
          onClick={handleDelete}
          size="sm"
        >
          Delete esse perfil
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
          className="text-light fw-semibold"
          size="sm"
        >
          {" "}
          Salvar{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditUserForm;
