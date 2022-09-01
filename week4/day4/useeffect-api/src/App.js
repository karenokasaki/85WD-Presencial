import Api from "./components/Api";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AxiosPage from "./pages/AxiosPage";
import NavbarComponent from "./components/NavbarComponent";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //CONFIGURAR AS ROTAS
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treino-axios" element={<AxiosPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
