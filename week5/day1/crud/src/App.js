import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateUserPage from "./pages/CreateUserPage";
import logo from "./assets/ironlogo.png";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //INFORMAÇÕES QUE PODEM SER COMPARTILHADAS POR VÁRIAS PAGINAS

  return (
    <>
      <nav className="navbar shadow-md rounded-bottom">
        <Link to="/" className="ms-3 text-reset text-decoration-none fs-1">
          Ironhackers
        </Link>
        <Link to="/">
          <img src={logo} alt="logo" height={110} />
        </Link>
      </nav>
      <div className="App container-lg">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/students/:studentID" element={<ProfilePage />} />

          <Route path="/create-user" element={<CreateUserPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <footer className="footer">
        Desenvolvido pela turma de Web Dev 85 FT
      </footer>
    </>
  );
}

export default App;
