import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const { studentID } = useParams();
  console.log(studentID);

  const [student, setStudent] = useState({});

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    type: "",
    sign: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`
        );

        setStudent(response.data);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [studentID, showForm]);

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

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      delete form._id;

      await axios.put(
        `https://ironrest.herokuapp.com/wd-85-ft/${studentID}`,
        form
      );

      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(form);
  return (
    <div>
      <h1>ProfilePage</h1>

      <h2>{student.name}</h2>
      <p>{student.sign}</p>
      <p>{student.age}</p>
      <p>{student.type}</p>

      <button onClick={handleDelete}>Delete esse perfil</button>
      <button onClick={() => setShowForm(!showForm)}>Edite esse perfil</button>

      {showForm === true && (
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input name="name" value={form.name} onChange={handleChange} />

          <label>Idade</label>
          <input name="age" value={form.age} onChange={handleChange} />

          <label>Signo</label>
          <input name="sign" value={form.sign} onChange={handleChange} />

          <label>Tipo</label>
          <select name="type" onChange={handleChange}>
            <option value="professor">Professor</option>
            <option value="aluno">Aluno</option>
            <option value="ta">Ta</option>
          </select>

          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
