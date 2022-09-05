import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AxiosPage from "./pages/AxiosPage";
import NavbarComponent from "./components/NavbarComponent";
import ErrorPage from "./pages/ErrorPage";
import DetailRecipe from "./pages/DetailRecipe";

function App() {
  //CONFIGURAR AS ROTAS
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treino-axios" element={<AxiosPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/recipe/:recipeID" element={<DetailRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
