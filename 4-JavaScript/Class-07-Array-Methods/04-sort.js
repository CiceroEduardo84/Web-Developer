// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const arrayNumber = [1, 2, 3, 0, 9, 8, 7, 6, 3, 3, 2, 6, 3, 43];
// Lexicographic UNICOD
// Table ASCII (0-9, A-Z, a-z)
// const arraySorted = arrayNumber.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });

const arraySorted = arrayNumber.sort((a, b) => b - a);
console.log(arraySorted.join("-"));
console.log(arrayNumber.join("-"));

const arrayNames = ["Pedrinho", "eduardo", "Luíza", "Éric"];

// arrayNames.sort((a, b) => a-b);
// arrayNames.sort((a, b) => {
//   a = a.toUpperCase();
//   b = b.toUpperCase()
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });
arrayNames.sort((a, b) => a.localeCompare(b));
arrayNumber.sort((a, b) => String(a).localeCompare(b));

console.log(arrayNames);
console.log(arrayNumber);

const arrayAnimes = [
  { name: "Dragon Ball", year: 1984 },
  { name: "Naruto", year: 1997 },
  { name: "Digimon", year: 1997 },
  { name: "Cavaleiros do zodiaco", year: 1986 },
  { name: "Jaspion", year: 1985 },
];

const sortedArrayAnimes = arrayAnimes.sort((a, b) => {
  if (a.year > b.year) return 1;
  if (a.year < b.year) return -1;
  else return 0;
});

console.table(arrayAnimes.sort((a, b) => a.year - b.year));
console.table(sortedArrayAnimes);

const sortedArrayAnimesName = arrayAnimes.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  else return 0;
});

console.table(sortedArrayAnimesName)
console.table(
  arrayAnimes.sort((a, b) => a.name.localeCompare(b.name))
);
