import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EditUserForm from "../../components/EditUserForm";
import Notes from "../../components/Notes";
import { Link } from "react-router-dom";
import Questions from "../../components/Questions";

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
      <h1>ProfilePage</h1>

      <Link to="/">Voltar</Link>

      <h2>{student.name}</h2>
      <p>{student.sign}</p>
      <p>{student.age}</p>
      <p>{student.type}</p>

      <button onClick={() => setShowForm(!showForm)}>Edite esse perfil</button>

      {showForm === true && (
        <EditUserForm
          form={form}
          studentID={studentID}
          setShowForm={setShowForm}
          setForm={setForm}
          reload={reload}
          setReload={setReload}
        />
      )}

      {!isLoading && (
        <>
          <Notes
            student={student}
            studentID={studentID}
            reload={reload}
            setReload={setReload}
          />

          <Questions
            student={student}
            studentID={studentID}
            reload={reload}
            setReload={setReload}
          />
        </>
      )}
    </div>
  );
}

export default ProfilePage;
