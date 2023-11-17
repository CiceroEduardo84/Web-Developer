class Animal {
  constructor(name, wight) {
    this.name = name;
    this.wight = wight;
  }
}

class Dog extends Animal {
  constructor(race, name, wight) {
    super(name, wight);
    this.race = race;
  }
}

// const animal = new Animal("Spike", 15);
// console.log(animal.name);

const dog = new Dog("Doberman", "Spike", 15);

console.log(dog);
