import axios from "axios";
import { useState, useEffect } from "react";

function AxiosPage() {
  const [advice, setAdvice] = useState("");
  const [reload, setReload] = useState(false);

  const [fact, setFact] = useState("");
  const [reloadFact, setReloadFact] = useState(false);

  console.log("treino");

  useEffect(() => {
    async function fetchAdvice() {
      try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(response.data.slip.advice);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("useEffect advice");

    fetchAdvice();
  }, [reload]);

  useEffect(() => {
    async function fetchFact() {
      const response = await axios.get(
        "https://asli-fun-fact-api.herokuapp.com/"
      );
      setFact(response.data.data.fact);
    }
    console.log("useEffect fact");

    fetchFact();
  }, [reloadFact]);

  return (
    <div>
      <div>
        <h1>Conselho do dia</h1>
        <h2>{advice}</h2>
        <button onClick={() => setReload(!reload)}>Another one!</button>
      </div>

      <div>
        <h1>Fact!</h1>
        <h2>{fact}</h2>
        <button onClick={() => setReloadFact(!reloadFact)}>Another one!</button>
      </div>
    </div>
  );
}

export default AxiosPage;
