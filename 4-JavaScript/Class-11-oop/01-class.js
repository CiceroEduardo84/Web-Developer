// Paradigmas
// Métodos(Funções)
// Atributos(Variaveis)
// Entidades do mundo real
// This (Scope)

// class Brush {
//   constructor(color, size) {
//     this.colorname = color;
//     this.sizeBrush = size;
//   }

//   action() {
//     console.log("Escreve!");
//   }
// }

// const blueBrush = new Brush("Blue", 10);
// const redBrush = new Brush("Red", 12);

// blueBrush.action()

// console.log(blueBrush.colorname);
// console.log(redBrush.colorname);

class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100;
  }

  attack() {
    console.log(`${this.name} atacou!`);
  }

  damage(effective, damage = 20 ) {
    if (effective) {
      this.health -= damage * 1.3;
    }
    this.health -= damage;
  }
}

const charmander = new Pokemon("Charmander", 5);
const squirtle = new Pokemon("Squirtle", 4);
const bulbasaur = new Pokemon("Bulbasaur", 4);

// console.log(charmander.name);
// console.log(charmander.level);
// console.log(squirtle.name);
// console.log(squirtle.level);
// squirtle.attack();

console.log(bulbasaur.name);
// console.log(bulbasaur.health);

bulbasaur.damage();
console.log(bulbasaur);
bulbasaur.damage(40);
console.log(bulbasaur);

const effective = true;
bulbasaur.damage(effective);
console.log(bulbasaur.health);

bulbasaur.damage(effective);
console.log(bulbasaur.health);
