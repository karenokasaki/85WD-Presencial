class Player {
  constructor(name, age, favColor, points) {
    (this.name = name), (this.age = age), (this.favColor = favColor);
    this.points = points;
    this.location = "brasil";
    this.course = "webdev";
  }

  play() {
    let dice = Math.round(Math.random() * 6);
    this.points -= dice;
    console.log(this);
  }
}

const player1 = new Player("karen", 29, "red", 20);
const player2 = new Player("doug", 31, "black", 10);

class Calculadora {
  soma(num1, num2) {
    return num1 + num2;
  }

  multiplicacao(num1, num2) {
    return num1 * num2;
  }
}

const cal = new Calculadora();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Olá!! Eu sou o/a ${this.name}`);
  }
}

class Cat extends Animal {
  constructor(name, age, favFood) {
    super(name, age);
    this.favFood = favFood;
  }

  miar() {
    console.log(`miau miau, me dá ${this.favFood}`);
  }
}

const animal1 = new Animal("Misha", 4);
animal1.sayHi();
const catcat = new Cat("tito", 1.5, "Sashe");
console.log(catcat.sayHi());
console.log(catcat.miar());
