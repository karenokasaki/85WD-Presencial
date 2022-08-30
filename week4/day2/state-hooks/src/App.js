import "./App.css";
import Hello from "./components/Hello";
import TextBox from "./components/TextBox";
import Post from "./components/Post";
import Author from "./components/Author";
import Contador from "./components/Contador";
import List from "./components/List";
import Temperatura from "./components/Temperatura";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <h1 style={{ display: "flex" }}>useState - Hooks</h1>
      <Hello color={"purple"}>Karen Okasaki</Hello>
      <Hello color={"red"}>Rodrigo do BB</Hello>

      <Post>
        <TextBox />
      </Post>

      <Contador />
      <Temperatura graus={10} />

      <List />

      <Projects />
    </div>
  );
}

export default App;
