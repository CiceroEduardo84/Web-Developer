// Factory (Creatinal Design Pattern)

function person(name, age) {
  return {
    name,
    age: age,
    canDrive: age >= 18,
    status: () => {
      if (age >= 18) {
        return "Pode dirigir";
      } else {
        return "Não pode dirigir";
      }
    },
  };
}

console.log(person("edu", 18));
console.log(person("odilas", 17).status());
console.log(typeof person("edu", 30));

// console.log(this); //Ref. escope