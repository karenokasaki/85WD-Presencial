import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route path="/students/:studentID" element={<ProfilePage />} />

        <Route path="/create-user" element={ <CreateUserPage /> }/>
        
      </Routes>
    </div>
  );
}

export default App;
