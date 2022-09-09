import { useState } from "react";
import axios from "axios";

import { Card, Form, Button } from "react-bootstrap";

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

    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body style={{ overFlow: "scroll", maxHeight: "300px" }}>
        <Card.Text>{question.question}</Card.Text>

        {question.isAnswered && (
          <Card.Subtitle className="text-muted mt-1">
            {question.answer}
          </Card.Subtitle>
        )}

        {!question.isAnswered && (
          <Form>
            <Form.Control
              placeholder="Responda a pergunta"
              value={inputAnswer}
              onChange={handleChange}
              required
            />
          </Form>
        )}
      </Card.Body>

      <Card.Footer>
        {question.isAnswered && (
          <Button size="sm" variant="danger" onClick={handleDelete}>
            Deletar Pergunta
          </Button>
        )}

        {!question.isAnswered && (
          <Button onClick={handleSubmit} size="sm" variant="success">
            Salvar Resposta
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}

export default Question;
