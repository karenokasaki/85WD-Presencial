import axios from "axios";
import { useState } from "react";

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
    <div>
      {!showForm && (
        <>
          <p>{note}</p>
          <button onClick={handleDelete}>Deletar nota</button>
          <button onClick={() => setShowForm(!showForm)}>Editar</button>
        </>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={noteEdit}
            rows={4}
            cols={35}
            onChange={handleChange}
          />
          <button type="submit">salvar</button>
        </form>
      )}
    </div>
  );
}

export default Note;
