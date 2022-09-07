import { useState } from "react";
import axios from "axios";

function Question({ question, index, student, studentID, reload, setReload }) {
  const [inputAnswer, setInputAnswer] = useState("");

  function handleChange(e) {
    setInputAnswer(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (inputAnswer === " " || inputAnswer === "  ") {
      return;
    }

    try {
      const clone = { ...student };
      delete clone._id;

      clone.questions[index].answer = inputAnswer;
      clone.questions[index].isAnswered = true;

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );

      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const clone = { ...student };
      delete clone._id;

      clone.questions.splice(index, 1);

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );

      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>Pergunta: {question.question}</p>

      {question.isAnswered && <p>Resposta: {question.answer}</p>}
      {!question.isAnswered && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="responde o coleguinha"
            value={inputAnswer}
            onChange={handleChange}
            required
          />
          <button type="submit">ok</button>
        </form>
      )}
      <button onClick={handleDelete}>Deletar Pergunta</button>
    </div>
  );
}

export default Question;
