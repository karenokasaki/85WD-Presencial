import "./App.css";
import ListOfProjects from "./components/ListOfProjects";
import ListOfNames from "./components/ListOfNames";
import SobreMim from "./components/SobreMim";

function App() {
  //DAQUI PRA BAIXO É JAVASCRIPT PURO

  /* const num1 = 25;
  const num2 = 25;
  const course = "Web dev Ironhack";


  const obj = {
    nome: "tamires",
    projeto: "Ache o gato",
    score: 10,
    tags: ["quiz", "cat", "memes", 20],
  };

  const arrayNested = [
    {
      nome: "tamires",
      projeto: "Ache o gato",
      score: 10,
      tags: ["quiz", "cat", "memes", 20],
    },
    {
      nome: "Rodrigo",
      projeto: "Forca",
      score: 10,
      tags: ["quiz", "velho oeste", "chapeu", 30],
    },
  ]; */

  function handleClick() {
    console.log("hello world");
  }

  const array = ["pato", "cachorro", "ganso", "pomba"];
  const city = "Rio de Janeiro";

  const bio = {
    nome: "karen",
    idade: 29,
    city: "Ribas do Rio Pardo - MS",
  };

  return (
    /* DAQUI PRA BAIXO É JSX */
    <div className="App">


    <div className="bioflex">
      <SobreMim bio={bio} />

      <SobreMim bio={bio} />
    </div>

      <button onClick={handleClick}>Clique aqui!!</button>

      <p>{array}</p>

      <ListOfNames />

      <ListOfProjects array={array} city={city} />

      {/* <img  src="" alt="foto da ironhack" />
       */}
      {/* <h1>ESAOEAHEAOSIHEA {course} ESAOIEASOIHEAIHEAS</h1>
      <p>{num1}</p>
      <p>{num1 + num2}</p>

      <p>Numero aleatório entre 0 e 10</p>
      <p>{Math.floor(Math.random() * 10)}</p>

      <p>{array}</p>
      <p>
        {obj.nome} - {obj.projeto} - {obj.tags[3]}
      </p>

      <p>{arrayNested}</p> */}
    </div>
  );
}

export default App;
