//manipulo o dom

/* const buttonsGet = document.getElementsByClassName("btn");
const buttonsQuery = document.querySelectorAll(".btn");

console.log(buttonsGet);

//for da massa
//for of
for (btn of buttonsGet) {
  console.log(btn);
}

console.log(buttonsQuery);
/* buttonsQuery.forEach((btn) => {
    console.log(btn);
  }); */

const btnSoma = document.querySelector("#btnSoma");
const btnSub = document.querySelector("#btnSub");
const contador = document.querySelector("#contador");

let total = 0;

btnSoma.addEventListener("click", () => {
  if (total === 7) {
    return;
  }
  total++;
  contador.innerText = total;
});

btnSub.addEventListener("click", () => {
  if (total === 0) {
    return;
  }
  total--;
  contador.innerText = total;
});
