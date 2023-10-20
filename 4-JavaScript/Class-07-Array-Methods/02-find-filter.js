// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const students = [
  { id: 1, name: "João", average: 6, birth: 2005 },
  { id: 2, name: "Thiago", average: 6, birth: 2002 },
  { id: 3, name: "Jonas", average: 5, birth: 1998 },
  { id: 4, name: "Rosa", average: 9, birth: 2004 },
  { id: 5, name: "Amanda", average: 8, birth: 1992 },
  { id: 6, name: "Pedro", average: 7, birth: 1998 },
  { id: 7, name: "Pedroo", average: 7, birth: 2000 },
  { id: 8, name: "Enzo", average: 8, birth: 2006 },
  { id: 9, name: "Dudu", average: 10, birth: 2007 },
];

console.log(
  students.find((value) => {
    return value.id === 1 || value.id === 5;
  })
);

console.log(
  students.find((value) => {
    return value.name === "Jonas" && value.name === "Rosa";
  })
);

console.log(
  students.find((value) => {
    return (
      value.name.toLocaleLowerCase() === "PeDro".toLocaleLowerCase() &&
      value.birth > 1998
    );
  })
);

// console.log(students.find((value) => value.average >= 6)); //retorn 1

//imutable
/*✨*/ console.table(students.filter((value) => value.average >= 6));

const cuurentYear = new Date().getFullYear();
console.log(students.filter((value) => cuurentYear - value.birth < 18));

console.log(students.filter((value) => value.name[0].includes("P")));

const userName = prompt("Digite o nome");
console.table(students.filter((value) => value.name.includes(userName)));
