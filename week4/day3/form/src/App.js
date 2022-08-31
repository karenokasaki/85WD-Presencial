import "./App.css";
import Form from "./components/Form";
import Posts from "./components/Posts";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      about: "react",
      lvlDif: "7",
      onLimit: false,
      nickname: "quero café",
      message: "pelo menos é melhor do que o DOM",
    },
    {
      about: "props",
      lvlDif: "8",
      onLimit: true,
      nickname: "sei errar",
      message: "nunca sei quando usar mas parece que funciona",
    },
    {
      about: "map",
      lvlDif: "6",
      onLimit: true,
      nickname: "uma latinha resolve",
      message: "até que vai mas tem que empurrar",
    },
  ]);

  return (
    <div className="App">
      <Posts posts={posts} setPosts={setPosts} />
      <Form posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
