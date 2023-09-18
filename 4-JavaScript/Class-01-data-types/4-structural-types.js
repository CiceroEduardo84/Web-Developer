// Object
//Declaração chave->valor

let nameStudent = "Cicero Eduardo";
let age = 19;
let profission = "Web Developer";

// console.log(nameStudent);
// console.log(age);
// console.log(profission);

let student = {
    nameS:"Emanuel",
    age:19,
    profission:"Web developer",
    attack: () => {
        console.log("pound");
    },
    special: () => {
        console.log("hydpump");
    },
}

// console.log(student);
// console.log(student.nameS);
// console.log(student.age);
// console.log(student.profission);
// console.log(student["age"]);
// console.log(student.attack());

let pokemon = {
    name:"Blastoise",
    level:30,
    type:"Water",
    attack: () => "pound",
    special: () => "hydroupump",
}

// console.log(pokemon);
// console.log(typeof pokemon);
// console.log(pokemon.name);
// console.log(pokemon.level);
// console.log(pokemon["type"]);
// console.log(pokemon.attack());
// console.log(pokemon.special());

// Array (Vector)

// let pokedex = ["Charmander", 6, "Bulbasour", 5, "Squirtle", 4];
// let pokedex = [
//     ["Charmander", 6],
//     ["Bulbasour", 5], 
//     ["Squirtle", 4],
// ];

let pokedex = [
    {name:"Charmander",level: 6,},
    {name:"Bulbasour", level: 5}, 
    {name:"Squirtle", level: 4},
];
console.log(pokedex);
console.log(typeof pokedex);
// console.log(pokedex[0][0]);
// console.log(pokedex[2][0]);
console.log(pokedex[1].name);