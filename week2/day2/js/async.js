//setTimeout()

console.log("antes do setTimeOut");

let intervalId = setTimeout(() => {
  console.log("estou dentro do setTimeOut");
}, 5000);

console.log("depois do setTimeOut");

//delay são milisegundos 1000 mili === 1 segundo

//setInterval()
let counter = 0;
let timeId = setInterval(() => {
  counter++;

  if (counter % 2 === 0) {
    console.log(`O contador está em ${counter} e é um numero par`);
  } else {
    console.log(`O contador está em ${counter} e é um numero impar`);
  }
}, 1000);

const name = "pedro";
console.log(name);

function getSomething() {
  let name = "karen";
  console.log(name);
}
getSomething();

console.log(name);
