//Retornar vários valores de uma função

//retornar um objeto
function getUserInfo(first, last) {
  const user = {
    name: first,
    lastName: last,
  };

  return user;
}
console.log(getUserInfo("karen", "okasaki").lastName);

//retornar uma array
function getClientInfo() {
  const client = ["nome da empresa", "endereço da empresa"];

  return client;
}
console.log(getClientInfo()[1]);

function getNumbers(num1, num2, num3) {
  const first = num1 * 2;
  const secund = num2 * 5;
  const third = num3 * 10;

  const result = [first, secund, third];

  return result;
}
console.log(getNumbers(4, 8, 9)[2]);

/* 
!funções
Pontos importantes para funções:
- reuse code (pensar em funções que podem ser reutilizadas)
- Separações de responsabilidades/interesses (cortar um problema em vários pedaços menores)
- Princípio da responsabilidade únicafunc   

Dicas: 
    - Nomei suas funções com verbos

Function declaration -> usa a palavra reservada FUNCTION
Function expression -> declara a function como uma variável
*/
function something() {}

const otherThing = () => {};

const otherOtherThing = function () {};

function getSum(arrayNumbers) {
  let counter = 0;
  arrayNumbers.forEach((elemento) => {
    counter += elemento;
  });
  return counter;
}

function getAvg(arrayOfNumbers, callback) {
  let sum = callback(arrayOfNumbers);
  return sum / arrayOfNumbers.length;
}
const numbers2 = [10, 20];
console.log("get avg", getAvg(numbers2, getSum));

/* 
O que é a callback 
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
!Callback function sempre é passada pra dentro de uma função e invocada lá dentro

arrow function não podem ser invocadas (porque elas são anonimas)
*/

//function normal
function getSumNumbers(a, b) {
  return a + b;
}
//arrow function
const getSum1 = (a, b) => {
  return a + b;
};

/* 
remova a palavra reservada function e adicione a arrow o parametro e o bloco de execução
getSum(a,b) => {
    return a+b
}
remova as chaves e o return (ele é implícito)
getSum(a,b) => a+b

remova o nome da função e os parenteses
(a,b) => a+b
*/

/*
() => console.log(hi) //mesma linha não precisa das chaves {} nem de return

() => {
}

function () {

}

*/

// forEach recebe uma callback function
/* let count = 0;
array.forEach((cE) => {
  console.log(cE);
}); */

// em uma linha >>>> array.forEach((cE) => console.log(cE));

/* array.forEach((cE, index) => {
  console.log(`Esse elemento: ${cE} e estamos no index ${index}`);
}); */

const numbers = [12, 25, 65, 45, 74, 58];
let count1 = 0;
numbers.forEach((number) => {
  count1 += number;
});
console.log(count1);

numbers.forEach((cE, i, array) => {
  console.log(`Elemento: ${cE} Index: ${i}`);
});

const array = ["webdev", "ux/ui", "data"];
/* 
!arrays
.splice(index do começo, deleteCount)
    array.splice(1, 2);
    console.log(array);
*/

//! String Método: split()
// exemplo de contar palavras
const str =
  "The split method allows us to separate a string into pieces and will return all the pieces as elements of a new array.";
const splitString = str.split(" ");
console.log(splitString.length);

//! Objects
const obj = {
  breakfast: "eggs",
  lunch: "nothing",
  dinner: "rice",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

const classes = [
  [
    { firstName: "Tomas", lastName: "Bechtelar", age: 22 },
    { firstName: "Nico", lastName: "Schamberger", age: 26 },
    { firstName: "Ashleigh", lastName: "Kutch", age: 29 },
    { firstName: "Lulu", lastName: "Considine", age: 20 },
    { firstName: "Garland", lastName: "Waelchi", age: 21 },
  ],
  [
    { firstName: "Charlie", lastName: "Rolfson", age: 23 },
    { firstName: "Austin", lastName: "Schowalter", age: 26 },
    { firstName: "Emie", lastName: "Franecki", age: 29 },
    { firstName: "Okey", lastName: "Runte", age: 18 },
    { firstName: "Jameson", lastName: "Jakubowski", age: 22 },
  ],
  [
    { firstName: "Antwan", lastName: "Marquardt", age: 22 },
    { firstName: "Eugenia", lastName: "Nienow", age: 23 },
    { firstName: "Keely", lastName: "Hagenes", age: 29 },
    { firstName: "Jazmin", lastName: "Aufderhar", age: 29 },
    { firstName: "Stanley", lastName: "Hand", age: 22 },
  ],
  [
    { firstName: "Vincent", lastName: "Langworth", age: 20 },
    { firstName: "Mervin", lastName: "Blick", age: 28 },
    { firstName: "Damien", lastName: "Rohan", age: 28 },
    { firstName: "Fabian", lastName: "Kautzer", age: 22 },
    { firstName: "Lilliana", lastName: "Lesch", age: 26 },
  ],
  [
    { firstName: "Antonette", lastName: "Stokes", age: 25 },
    { firstName: "Alexandrine", lastName: "DuBuque", age: 22 },
    { firstName: "Braeden", lastName: "Walker", age: 26 },
    { firstName: "Derick", lastName: "Weber", age: 22 },
    { firstName: "Robert", lastName: "Beatty", age: 30 },
  ],
];

console.log(classes[2][3]);
/* 
Retrieve the second “classroom” of students
Retrieve the first name “Antonette”
Retrieve the age 18
Retrieve the last name “Beatty”
*/

const schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
          students: [
            { firstName: "Aliyah", lastName: "Schulist", age: 18 },
            { firstName: "Cleveland", lastName: "Towne", age: 28 },
            { firstName: "Jan", lastName: "Quitzon", age: 18 },
            { firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
            { firstName: "Gerhard", lastName: "Bergstrom", age: 23 },
          ],
        },
        {
          teacher: { firstName: "Edwardo", lastName: "Schowalter", age: 28 },
          students: [
            { firstName: "Manley", lastName: "Doyle", age: 18 },
            { firstName: "Maximilian", lastName: "Gleichner", age: 19 },
            { firstName: "Sid", lastName: "Rohan", age: 30 },
            { firstName: "Catalina", lastName: "Hilpert", age: 27 },
            { firstName: "Gerald", lastName: "O'Keefe", age: 26 },
          ],
        },
      ],
    },
    {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: "Lucas", lastName: "Schroeder", age: 29 },
          students: [
            { firstName: "Giuseppe", lastName: "Hegmann", age: 24 },
            { firstName: "Jennyfer", lastName: "Hane", age: 19 },
            { firstName: "Mikayla", lastName: "Braun", age: 23 },
            { firstName: "Rickie", lastName: "White", age: 22 },
            { firstName: "Rose", lastName: "Collins", age: 30 },
          ],
        },
        {
          teacher: { firstName: "Green", lastName: "Sauer", age: 25 },
          students: [
            { firstName: "Melany", lastName: "Welch", age: 25 },
            { firstName: "Paxton", lastName: "Corkery", age: 22 },
            { firstName: "Nellie", lastName: "Hauck", age: 26 },
            { firstName: "Eunice", lastName: "Hirthe", age: 26 },
            { firstName: "Aylin", lastName: "Barrows", age: 26 },
          ],
        },
      ],
    },
    {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: "Nikko", lastName: "Crist", age: 42 },
          students: [
            { firstName: "Christop", lastName: "Hahn", age: 26 },
            { firstName: "Newell", lastName: "Kemmer", age: 27 },
            { firstName: "Katheryn", lastName: "Heller", age: 26 },
            { firstName: "Saul", lastName: "Heathcote", age: 20 },
            { firstName: "Maudie", lastName: "Haley", age: 30 },
          ],
        },
        {
          teacher: { firstName: "Nathanael", lastName: "Hansson", age: 50 },
          students: [
            { firstName: "Jensen", lastName: "Reichel", age: 21 },
            { firstName: "Lois", lastName: "Kulas", age: 28 },
            { firstName: "Caterina", lastName: "Wolff", age: 28 },
            { firstName: "Dahlia", lastName: "Collier", age: 24 },
            { firstName: "Linwood", lastName: "Langosh", age: 26 },
          ],
        },
      ],
    },
  ],
};
console.log(schoolSystem.schools[0].classRooms[1].students[2].firstName);
/* 
Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.
Retrieve the “Fake School 3” object
Retrieve the teacher with the first name of “Nathanael”
Retrieve the student with the first name of “Saul”
*/
const a = [];
const b = true;

if (typeof b === "boolean") {
  console.log("isso é um boolean");
}
