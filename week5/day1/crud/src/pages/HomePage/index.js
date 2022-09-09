import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Form, Row, Col, Card } from "react-bootstrap";

function HomePage() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchComAxios() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/wd-85-ft"
        );
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComAxios();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Row>
        <Col className="col-10">
          <Form.Control
            value={search}
            onChange={handleSearch}
            placeholder="Procure um amiguinho"
          />
        </Col>
        <Col>
          <Link to="/create-user">
            <Button className="btn btn-light btn-outline-dark">
              Crie Perfil
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="d-flex justify-content-evenly mt-4">
        {students
          .filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((student) => {
            return (
              <Card
                key={student._id}
                style={{ width: "14rem", margin: "20px", alignItems: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="http://franquia.globalmedclinica.com.br/wp-content/uploads/2016/01/investidores-img-02-01.png"
                />
                <Card.Body>
                  <Card.Title>{student.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {student.type}
                  </Card.Subtitle>
                  <Card.Text>Algum texto sobre os alunos</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Link to={`/students/${student._id}`}>
                    <Button variant="dark">Perfil Completo</Button>
                  </Link>
                </Card.Footer>
              </Card>
            );
          })}
      </Row>
    </div>
  );
}

export default HomePage;
