import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EditUserForm from "../../components/EditUserForm";
import Notes from "../../components/Notes";
import { Link } from "react-router-dom";
import Questions from "../../components/Questions";

import {
  Button,
  Modal,
  Form,
  Accordion,
  FloatingLabel,
  Card,
} from "react-bootstrap";

function ProfilePage() {
  const { studentID } = useParams();

  const [student, setStudent] = useState({});
  console.log(student);

  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    age: "",
    type: "",
    sign: "",
  });

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
        );

        setStudent(response.data);
        setForm(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [studentID, reload]);

  return (
    <div>
      <div className="card d-flex flex-row shadow-md justify-content-between align-items-center">
        <span className="m-2 fs-2 fw-semibold">{student.name}</span>
        <span>Signo: {student.sign}</span>
        <span>{student.age} anos</span>
        <span>{student.type}</span>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-light btn-outline-dark btn-sm me-2"
        >
          Editar Perfil
        </Button>
      </div>

      {showForm === true && (
        <EditUserForm
          form={form}
          studentID={studentID}
          setShowForm={setShowForm}
          setForm={setForm}
          reload={reload}
          setReload={setReload}
          showForm={showForm}
        />
      )}

      {!isLoading && (
        <div className="mt-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Minhas Anotações</Accordion.Header>
              <Accordion.Body>
                <Notes
                  student={student}
                  studentID={studentID}
                  reload={reload}
                  setReload={setReload}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Minhas Perguntas</Accordion.Header>
              <Accordion.Body>
                <Questions
                  student={student}
                  studentID={studentID}
                  reload={reload}
                  setReload={setReload}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
