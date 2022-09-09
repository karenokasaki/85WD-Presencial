import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function Note({ note, index, student, studentID, reload, setReload }) {
  const [showForm, setShowForm] = useState(false);

  const [noteEdit, setNoteEdit] = useState(note);

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const clone = { ...student };
      delete clone._id;

      clone.notes.splice(index, 1);

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );

      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(showForm);

  function handleChange(e) {
    setNoteEdit(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...student };
      delete clone._id;

      clone.notes[index] = noteEdit;

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );
      setReload(!reload);
      setShowForm(!showForm);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body>
        {!showForm && <Card.Text>{note}</Card.Text>}

        {showForm && (
          <Form>
            <Form.Control
              as="textarea"
              value={noteEdit}
              onChange={handleChange}
            />
          </Form>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        {!showForm && (
          <>
            <Button size="sm" onClick={() => setShowForm(!showForm)}>
              Editar
            </Button>
          </>
        )}

        {showForm && (
          <>
            <Button size="sm" variant="danger" onClick={handleDelete}>
              Deletar nota
            </Button>
            <Button size="sm" variant="success" onClick={handleSubmit}>
              Salvar
            </Button>
          </>
        )}
      </Card.Footer>
    </Card>
  );
}

export default Note;
