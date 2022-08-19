/* 
história do javascript, criada em 1995. sintax do java
feito para rodar no navegador mas por meio do node pode ser rodado em outros lugares
ECMASCRIPT - padrão de javascript que pode ser rodado em todos os navegadores
ES5 - 2009
ES6 - 2015
ES7 - 2016

Sintax do javascript 
O que o parênteses significa () função
{} bloco de execução 
exemplos: 
if (condição) {
    return true
}
|| OR 
&& AND
! NOT  
function addNumbers(a, b) {
    return a + b
}
console.log('tudo aqui dentro é printado no console')

- Comentários - single line / multiline

Variáveis 
- var 
    - não se usa mais (escopo global declarado fora da função / escopo local dentro de uma função)
    - podem ser declaradas duas vezes e atualizadas de valor
- let 
    - aceita alteração de valor mas não pode ser declarada novamente
    - escopo de bloco
    - pode ter variáveis com o mesmo nome mas em escopo diferentes
- const 
    - não aceita alteração de valor e nem ser declarada novamente
    - escopo de bloco
    - deve ser declarada e iniciada
*/

const number = 0;
const float = 15.23;
const string = "ironhack";
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;

//numbers
console.log(10 + 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 - 10);
console.log(2 ** 5); //2 * 2 * 2 * 2 * 2

//módulo (remainder)
if (10 % 5 === 0) {
  console.log("par");
}
console.log(10 % 2 === 0);

//strings

const name1 = "Karen";
const name2 = "karen";
const name3 = `karen`;

console.log(name1.length);
//Template literals -  ${}
console.log(`Olá ${name1}`);

const customer = {
  name: "karen",
  age: 29,
};
console.log(`Olá ${customer.name}, parabéns pelos ${customer.age}`);

//localeCompare()
//includes()

const frase = "ironhack webdev full time";
const words = frase.split(" ");
console.log(words);

const words2 = frase.slice(10, 15);
console.log(words2);

const inclui = frase.includes("webdev");
console.log(inclui);



// functions - sintax - argumentos e parametros 






//switch
function cal(num1, num2, operator) {
  let result;

  if (!num1 || !num2 || !operator) {
    return console.log("please pass 2 number and one operator");
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  let response = `${num1} ${operator} ${num2} = ${result}`;
  return response;
}
