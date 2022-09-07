import Question from "../Question";
import { useState } from "react";
import axios from "axios";

function Questions({ student, studentID, reload, setReload }) {
  const [askedQuestion, setAskedQuestion] = useState({
    question: "",
    answer: "",
    isAnswered: false,
  });

  function handleChange(e) {
    setAskedQuestion({ ...askedQuestion, question: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...student };
      delete clone._id;

      clone.questions.push(askedQuestion);

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        clone
      );

      setReload(!reload);
      setAskedQuestion({ ...askedQuestion, question: "" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Suas perguntas</h2>
      {student.questions.map((question, index) => {
        return (
          <Question
            question={question}
            index={index}
            key={question.question}
            student={student}
            studentID={studentID}
            reload={reload}
            setReload={setReload}
          />
        );
      })}

      <form onSubmit={handleSubmit}>
        <label>Faça uma pergunta</label>
        <input value={askedQuestion.question} onChange={handleChange} />
        <button type="submit">Salvar pergunta</button>
      </form>
    </div>
  );
}

export default Questions;
