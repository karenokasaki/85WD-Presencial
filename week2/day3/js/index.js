//capturar meus elementos de HTML

const inputTask = document.querySelector("#form input");
const button = document.querySelector("#form button");
const lista = document.querySelector("#lista");

console.log(lista);

button.addEventListener("click", () => {
  //o que vai acontecer quando clicarem no botão

  let li = document.createElement("li");
  li.innerText = inputTask.value;
  li.classList.add("item");

  lista.appendChild(li);
});

//CRIAR UMA TAG <P></P> PRA CADA ITEM DE UMA ARRAY
const arrayFav = [
  "Carta1",
  "Carta1",
  "Carta2",
  "Carta2",
  "Carta3",
  "Carta3",
  "Carta4",
  "Carta4",
];
const fav = document.querySelector("#fav");
arrayFav.forEach((element) => {
  let p = document.createElement("p");
  p.innerText = element;
  console.log(p);
  fav.appendChild(p);
});

console.log(fav);

//iterar por essa array e pra cada elemento, vou criar uma
//tag html <p>café</p> e adicionar o elemento da array no innertext
//dar o append dessa tag na div "fav"

const arrayHate = ["Acordar cedo", "Bolsonaro"];
