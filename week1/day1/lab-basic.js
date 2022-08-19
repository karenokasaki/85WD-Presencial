let hacker1 = "fabio";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "rodrigo";
console.log(`The hacker2's name is ${hacker2}`);

console.log(hacker1.length);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}
if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}
if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

//3.1
const splitHacker = hacker1.split("");
console.log(splitHacker.join(" ").toUpperCase());

function spaceAndUpper(pessoa) {
  let newPessoa = "";
  for (let i = 0; i < pessoa.length; i++) {
    let letter = pessoa.charAt(i).toUpperCase() + " ";
    newPessoa += letter;
  }
  console.log(newPessoa);
}
spaceAndUpper(hacker1);

//3.2

function inverter(name) {
  let str = "";

  for (let i = name.length - 1; i >= 0; i--) {
    str += name[i] + " ";
  }

  console.log(str.toUpperCase());
}
inverter(hacker2);

const arrayOfNames = [];
arrayOfNames.push(hacker1, hacker2);
console.log(arrayOfNames.sort());

if (hacker1 === hacker2) {
  console.log("ops mesmo nomes.");
} else {
  //não tem o mesmo nome
  if (arrayOfNames[0] === hacker1) {
    console.log("The driver's name goes first.");
  } else if (arrayOfNames[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  }
}

const loremIpsum =
  "Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Vivamus id dui magna. Aliquam semper rutrum placerat. Fusce sodales orci eget nulla finibus, ac fringilla purus ultrices. Curabitur augue dolor, viverra suscipit pulvinar ut, faucibus in mauris. Praesent ullamcorper faucibus eros. Sed vitae odio sed tortor rutrum tempus. Nam dapibus accumsan accumsan. Mauris lacinia auctor tellus ut tristique. Curabitur sit amet tincidunt purus. Sed et lobortis orci, ac mattis augue. Etiam non ornare felis, consectetur blandit lacus. Donec at magna urna. Donec pharetra felis quis efficitur tristique. Sed cursus ante et enim pellentesque, sit amet malesuada neque auctor. Morbi at elit nec ante interdum condimentum quis at ex. Duis porta ligula eget libero dictum tincidunt. Integer venenatis faucibus tortor, in tempor mauris tempor ut. Aliquam diam augue, accumsan quis pharetra et, rhoncus et tortor. Maecenas vitae felis quis nisi congue viverra. Nulla placerat, sapien non tincidunt ultricies, sem nunc efficitur augue, ac accumsan quam massa quis turpis. Vestibulum viverra dolor a est ullamcorper pretium. Aenean id lacinia augue, at facilisis turpis. Etiam tristique dui vitae dictum ultricies. Aliquam erat volutpat. Maecenas sit amet mattis lectus. Duis congue turpis nec ex fringilla gravida. In sodales diam a posuere pulvinar. Maecenas ac dolor id lectus volutpat mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut massa eros, luctus a varius nec, venenatis id lacus.";

let newLorem = loremIpsum.split(" ");
console.log(newLorem.length);
let counter = 0;
for (let i = 0; i < newLorem.length; i++) {
  if (newLorem[i] === "et") {
    counter++;
  }
}
console.log(counter);

function checkPalindrome(check) {
  let phrase = check.split(" ");
  let newPhrase = phrase.join("");
  let phraseReverse = "";

  for (let i = newPhrase.length - 1; i >= 0; i--) {
    phraseReverse += newPhrase[i];
  }
  console.log(phraseReverse);
  console.log(newPhrase);

  if (phraseReverse === newPhrase) {
    console.log("This phrase is a Palindrome!!!");
  } else {
    console.log("This phrase is not a Palindrome!!");
  }
}

checkPalindrome("stack cats");
