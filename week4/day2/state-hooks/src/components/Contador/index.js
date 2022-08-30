import { useState } from "react";
import style from "./Contador.module.css";

function Contador() {
  const [count, setCount] = useState(0);

  function statePlus() {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  }

  function stateMinus() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  /*   
    JEITO ANTIGO - DOM
let count = 0;

  function handleSoma() {
    count++;
    console.log(count);
  }

  function handleSub() {
    count--;
    console.log(count);
  } */

  return (
    <div className={style.container}>
      <h1 className={style.textWhite}>{count}</h1>
      <button onClick={statePlus}>+</button>
      <button onClick={stateMinus}>-</button>
    </div>
  );
}

export default Contador;
