// Array Manipulation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArray = ["A"];
const myArray2 = Array("A", 1, () => "a");

console.log(myArray);
console.log(myArray2[0]);
console.log(myArray2[2]());
console.log(myArray2.join("_"));

const myName = "Cicero Eduardo";
console.log(myName.slice(3, 7));
console.log(myName.split("").reverse().join(""));

const arrayTechs = ["HTML", "CSS", "GIT", "Node", "GitHub"];
arrayTechs.push("JavaScript"); //adiciona ao final
arrayTechs.push("So acredito vendo!");
arrayTechs.pop(); //remove no final

const arrayRemove = arrayTechs.pop(); // LIFO
console.log(arrayRemove + "");

const removeItem = arrayTechs.shift(""); //remove no incio
console.log(removeItem);
arrayTechs.unshift("React"); //adiciona ao inicio

console.log(arrayTechs);
console.log(arrayTechs.includes("React"));
console.log("A" == "a"); //Js is caseSensi.

console.log(arrayTechs.indexOf("Git")); // -1 not exists
console.log(arrayTechs.keys());
console.log(arrayTechs.slice(0, 2));
console.log(arrayTechs.slice(-3, -1));
console.log(arrayTechs.splice(-1));
console.log(arrayTechs);
console.log(myArray2.concat(arrayTechs));
