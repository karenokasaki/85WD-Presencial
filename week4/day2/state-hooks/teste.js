let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
};

let fav = person.favoriteMusic;
let age = person.age
let name = person.name

const props = {
  nome: "karen",
  handle: "@k_okasaki",
};

const props2 = {
    nome: "vitor",
    handle: "@vitao",
  };

let { handle } = props; // => k_okasaki
let { handle : handle2 } = props2;  // vitão

console.log(handle)

const array = ["Tami", "Leo", "Bruno"]
const array2 = ["Doug", "Jino", "Pedro"]

let newArray = [...array, ...array2]

let [nome1, nome2, nome3] = array
console.log(nome1) // ==> "Tami"

//
...spread