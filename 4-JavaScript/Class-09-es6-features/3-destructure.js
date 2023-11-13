const numbers = [1, 2333, 30, 42345, 646656];

console.log(numbers);

// spread
console.log(...numbers);
console.log(Math.max(...numbers));

// destructure
const array = ["A", "B"];
const [item1, item2] = array;
console.log(array);
console.log(item1);
console.log(item2);

//rest
function showArray(array, ...itens) {
  console.log(array);
  console.log(itens);
}

showArray(array, "A", "B", "C");
