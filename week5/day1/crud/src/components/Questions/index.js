import Question from "../Question";
import { useState } from "react";
import axios from "axios";

import { Form, Card, Button, InputGroup, FloatingLabel } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Tire suas dúvidas com os seus colegas aqui..."
          >
            <Form.Control
              as="textarea"
              value={askedQuestion.question}
              placeholder="Tire suas dúvidas com os seus colegas aqui..."
              onChange={handleChange}
              style={{
                minHeight: "100px",
                maxHeight: "120px",
              }}
            />
          </FloatingLabel>
          <InputGroup.Text>
            <Button type="submit" variant="success">
              Salvar pergunta
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form>
      <div className="d-flex flex-row flex-wrap justify-content-center mt-3 mb-3">
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
      </div>
    </div>
  );
}

export default Questions;
