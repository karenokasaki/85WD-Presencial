import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const { studentID } = useParams();
  console.log(studentID);

  const [student, setStudent] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
        );

        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [studentID]);

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>ProfilePage</h1>

      <h2>{student.name}</h2>
      <p>{student.sign}</p>
      <p>{student.age}</p>
      <p>{student.type}</p>

      <button onClick={handleDelete}>Delete esse perfil</button>
    </div>
  );
}

export default ProfilePage;
