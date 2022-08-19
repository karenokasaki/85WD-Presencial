const doug = {
  name: "doug",
  age: 31,
  favColor: "black",
  points: 10,
};

const fabio = {
  name: "fabio",
  age: 44,
  favColor: "blue",
  points: 10,
};
console.log("primeira rodada");
let dice = Math.round(Math.random() * 6);
//vez do doug jogar o dado e subtrair o valor do seus pontos
doug.points = doug.points - dice;
// é a mesma coisa => doug.points -= dice;
console.log(doug);

let dice1 = Math.round(Math.random() * 6);
fabio.points -= dice1;
console.log(fabio);

console.log("segunda rodada");

//segunda rodada
let dice3 = Math.round(Math.random() * 6);
doug.points = doug.points - dice3;
console.log(doug);

let dice4 = Math.round(Math.random() * 6);
fabio.points -= dice4;
console.log(fabio);
