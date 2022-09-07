import { useState } from "react";
import axios from "axios";
import Note from "../Note";

function Notes({ student, studentID, reload, setReload }) {
  const [noteInput, setNoteInput] = useState("");

  function handleChange(e) {
    setNoteInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...student }; //clonar o state STUDENT
      delete clone._id; //não posso mandar o _id de volta pra API

      clone.notes.push(noteInput); //adicionando o que está escrito no INPUT dentro da array de NOTES.

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );

      setNoteInput("");
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(noteInput);

  return (
    <div>
      {student.notes.map((note, index) => {

        return (
          <Note
            note={note}
            index={index}
            key={note}
            student={student}
            studentID={studentID}
            reload={reload}
            setReload={setReload}
          />
        );
      })}

      <form onSubmit={handleSubmit}>
        <label>Crie sua nota!!</label>
        <textarea
          value={noteInput}
          onChange={handleChange}
          rows={4}
          cols={35}
        />
        <button type="submit">Salvar nota</button>
      </form>
    </div>
  );
}

export default Notes;
