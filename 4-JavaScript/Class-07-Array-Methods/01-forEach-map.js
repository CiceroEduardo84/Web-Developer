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

const rectangles = [
  { widht: 4, height: 5 },
  { widht: 5, height: 6 },
  { widht: 6, height: 7 },
  { widht: 7, height: 8 },
  { widht: 8, height: 9 },
];

const calculateAreas = rectangles.map((value, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: value.widht * value.height,
  };
});

console.log(calculateAreas);
console.table(calculateAreas);
document.write(JSON.stringify(calculateAreas));
