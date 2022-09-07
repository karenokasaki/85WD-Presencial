import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h1>HomePage</h1>
      <Link to="/create-user">Crie seu perfil no app</Link>
      <input value={search} onChange={handleSearch} />
      <div>
        {students
          .filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((student) => {
            return (
              <div key={student._id}>
                <h2>{student.name}</h2>
                <Link to={`/students/${student._id}`}>
                  Veja Perfil Completo
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
