// MINDRE BRUKT:
// setInterval() - Funksjon som kjører seg på angitt tid i ms til den bli stoppet.

// const intervalID = setInterval(() => {
//   console.log("Dette kjører hvert sekund");
// }, 1000);
// console.log(intervalID);

// Kjør annen kode.

// clearInterval(intervalID);

// DENNE ER MYE BRUKT:
// setTimeout() - Funksjon som kjører noe på angitt tid i ms, men kun en gang.

// setTimeout(() => {
//   console.log("Dette kjører bare en gang etter angitt tid");
// }, 3000);

// Destructuring
const numbers = [1, 2, 3, 4, 5, 6];

// Mye kode å skrive for å lagre verdier i en liste i forkjellige variabler
let numb = numbers[0];
let numb2 = numbers[1];
let numb3 = numbers[2];
let numb4 = numbers[3];
let numb5 = numbers[4];
let numb6 = numbers[5];

// console.log(numb, numb2, numb3, numb4, numb5, numb6);

// En linjekode for å hente ut og opprette variabler fra en liste
const [firstNumber, secondNumber, thirdNumber, ...otherNumbers] = numbers;
const [, , , thirdNumber1, ...otherNumbers2] = numbers; // Henter og lagrer fra index nr3
// console.log(firstNumber, secondNumber, thirdNumber);
// console.log(thirdNumber1, otherNumbers2);
// console.log(otherNumbers);

// Destructing a function that returns an array.
function colors() {
  return ["blue", "red", "green", "yellow"];
}

const [color1, color2, ...theRest] = colors();
// console.log(color1, color2, theRest);

// Destructuting a matrix (to dim tabell):
const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [10, 11, 12, 13, 14, 15, 16, 17],
  [20, 21, 22, 23, 24, 25, 26, 27],
  [30, 31, 32, 33, 34, 35, 36, 37],
];
// console.log(matrix[2][5]);

// Uten destructuring
// matrix.forEach(([element, index]) => {
//   console.log(`Row: ${element} Value: ${index}`);
// });

// Med destructuring
const position = [
  ["x", 89, "text1"],
  ["y", 14, "text2"],
  ["z", -15, "text3"],
];
// position.forEach(([axis, value, text]) => {
//   console.log(`Axis: ${axis} Value: ${value} Text: ${text}`);
// });

// Destructuring of objects
const user = {
  name: "Nicklas",
  displayName: "NicklasDK96",
  hobby: ["Gaming", "Coding", "Dog"],
  adresse: {
    streetName: "Gamlevegen",
    streetNumber: 666,
    postalCode: 6100,
    city: "Volda",
  },
  id: 59624812343,
};

// Alias -> name: fName -> name får ett nyt alias som er fName.
// Destructuring av et object
const { name: fName, displayName, hobby, adresse, id } = user;
// console.log(displayName, fName, id, hobby, adresse);

// Dekonstruering av et objekt sendt som parameter inn i en funksjon.
function processInfo({ name: fName, displayName, hobby, adresse, id }) {
  // console.log(displayName, fName, id, hobby, adresse);
}

processInfo(user);
