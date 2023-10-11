const array = ["Matrix", "IT", "ET", "Jumanji", "barbie"];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element);
// }

// console.log(array);

// callback
const arrayForEach = array.forEach((value, index, array) => {
  // array[index] = "abc"
  return { value, index, array };
});

console.log(arrayForEach);
// console.log(array);

//imutable
/*✨*/ const arrayMap = array.map((value, index, array) => {
  return { value, index, array };
});

console.log(array);
console.log(arrayMap);

const dollar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const realConverted = dollar.map((value) => {
  return value * 5.05;
});

console.log(dollar);
console.log(realConverted);
