let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

for (let count = 0; count < 10; count++) {
  if (count > 2 && count < 8) {
    // continue;
    break;
  }
  console.log(count);
}

const myArray = ["A", 2, {}, () => {}];
const arrayBi = [
  ["A", "B", "C"],
  [1, 2, 3],
  [
    ["a", "b", "c"],
    [1, 2, 3],
  ],
];

// const myArrayTri =  [
//   [
//   ["a","b","c"],
//   [1,2,3],
// ]
// ]
// console.log(arrayBi[0]);
// console.log(arrayBi[1]);
// console.log(arrayBi[0][1]);
// console.log(myArrayTri[0][0][2]);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

for (let i = 0; i < arrayBi.length; i++) {
  for (let j = 0; j < arrayBi[i].length; j++) {
    for (let k = 0; k < arrayBi[i][j].length; k++) {
      console.log(arrayBi[i][j][k]);
    }
  }
}

// of == "ov" != "off"
// for (const i of myArray) {
//   console.log(i);
// }

// for (const i of myArray) {
//   for (const j of i) {
//     console.log(j);
//   }
// }

for (const i in myArray) {
  console.log(i);
}
