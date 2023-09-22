// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Function Statements

//named
function avarage(grade1, grade2 /*parameters*/) {
  const result = (grade1 + grade2) / 2;
  document.write(`${result} <br>`);
}

avarage(10, 7); //Argument
avarage(10, 5);
avarage(10, 9);
avarage(10, 2);

//anonymous
const add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(2, 3));

//Arrow
//Caso tenha 1 linha de lógica;
const mult = (num1, num2) => num1 * num2;

//caso tenha mais de uma linha de lógica
const mult2 = (num1, num2) => num1 * num2;

console.log(mult(2, 3));
