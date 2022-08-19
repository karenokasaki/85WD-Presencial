const calculadora = new Calculadora(); //instancear uma classe

/*  TIPOS DE QUERYS
    //getElementById and getElementByClassName
document.getElementById("resultado"); //id
document.getElementsByClassName("btn"); // class
    //usando o querySelector and querySelectorAll
document.querySelector("#resultado"); //id
document.querySelector(".btn"); //class vai me retornar o primeiro
document.querySelectorAll(".btn"); // vai me retornar todos as tags com essa classa
*/
/* Usos do innerHTML
let name = "karen";
resultado.innerHTML = `
<p>Esse é um <strong>${name}</strong></p>
`; 
*/

//capturar todos os elementos de html que vamos manipualr
const resultado = document.getElementById("resultado");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btnSoma = document.getElementById("btnSoma");
const btnReset = document.getElementById("btnReset");
const nameInput = document.getElementById("nameInput");
const namePlace = document.getElementById("namePlace");
const div = document.getElementById("div");
const btnDiv = document.getElementById("btnDiv");
const div2 = document.getElementById("div2");

//escrevo algumas funções

//no final eu tenho todos meus eventListeners
btnSoma.addEventListener("click", (event) => {
  //o que eu quero que aconteça quando alguém clicar no botão somar?
  event.preventDefault();

  //1º pegar os valores dos inputs
  let value1 = +num1.value;
  let value2 = +num2.value;

  console.log(typeof value1);

  //invocar o método de soma() da minha classe
  let result = calculadora.soma(value1, value2);

  //mostrar o resultado dentro da tag span (resultado)
  resultado.innerText = result;
});

btnReset.addEventListener("click", (event) => {
  event.preventDefault();

  //limpando meus inputs
  num1.value = "";
  num2.value = "";
  //limpando meu resultado
  resultado.innerText = "";

  //limpar meu nome do input
  nameInput.value = "";
  namePlace.innerText = "";
});

nameInput.addEventListener("keydown", () => {
  console.log(nameInput.value);

  namePlace.innerText = nameInput.value;
});

div.addEventListener("mouseover", () => {
  console.log("passei pela div");

  div.style.backgroundColor = "blue";

  setTimeout(() => {
    div.style.backgroundColor = "";
  }, 500);
});

btnDiv.addEventListener("click", (event) => {
  event.preventDefault();

  div.classList.remove("hide");
  div.classList.add("show");

  div2.classList.remove("show")
  div2.classList.add("hide")
});

//CRIAR UM BOTÃO NO HTML QUE VAI SE CHAMAR MULTIPLICAÇÃO
//CAPTURAR ESSE BOTÃO NO SEU ARQUIVO INDEX.JS
//COLOCAR UM EVENTLISTENNER NESSE BOTÃO
//CHAMAR O MÉTODO DE MUL DA SUA CLASSE
