// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Type Operators

// Binary
let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log("text" + num2);
console.log(2 + 3);

//Unary
console.log(num1++);
console.log(num1);
console.log(++num1);
console.log(typeof num1);

//Ternary

// test ? true : false;

console.log(3 > 4 ? "verdadeiro" : "falso");
console.log(3 == 4 ? "verdadeiro" : "falso");
console.log(3 < 4 ? "verdadeiro" : "falso");

const average = 7;
console.log(average >= 7 ? "Aprovado" : "Reprovado");

// Truthy               Falsy
// 1, 1.5, -1           0
// " ", "0", "false"    ""
// {}                   null
// []                   undefined
// Infinity, -Infinity  NaN
//  Sempre que o valor bollean for obrigatorio ele tem qu eretornar true e false;
console.log(1 ? true : false);
console.log(" " ? true : false);
console.log({} ? true : false);
console.log([] ? true : false);
console.log(0 ? true : false);
console.log("" ? true : false);
console.log(null ? true : false);
console.log(undefined ? true : false);
console.log(NaN ? true : false);
