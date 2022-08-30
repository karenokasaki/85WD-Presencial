import { useState } from "react";
import Card from "../Card";

function Projects() {
  const [turma, setTurma] = useState([
    {
      dev: "Andrea",
      game: "Show do milhão",
      status: "reprovado",
      deploy: "",
      slide: "",
      github: "",
    },
    {
      dev: "Fabio",
      game: "Jokenpo",
      status: "aprovado",
      deploy: "",
      github: "",
      slide: "",
    },
    {
      dev: "Vitor",
      game: "Short Cuts",
      status: "aprovado",
      deploy: "",
      slide: "",
      github: "",
    },
    {
      dev: "Bruno",
      game: "Sudoku",
      status: "aprovado",
      deploy: "",
      github: "",
      slide: "",
    },
    {
      dev: "Tami",
      game: "Ache o gato",
      status: "aprovado",
      deploy: "",
      slide: "",
      github: "",
    },
  ]);

  return (
    <>
      {turma.map((element, index, arrayOriginal) => {
        return (
        <>
            <Card project={element} key={element.dev}/>
            <p>Vitor</p>
        </>
        );
      })}
    </>
  );
}

export default Projects;
