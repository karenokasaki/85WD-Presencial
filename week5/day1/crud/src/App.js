import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/students/:studentID" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
