// Paradigmas
// Métodos(Funções)
// Atributos(Variaveis)
// Entidades do mundo real
// This (Scope)
class Brush {
  constructor(color, size) {
    this.colorname = color;
    this.sizeBrush = size;
  }

  action() {
    console.log("Escreve!");
  }
}

const blueBrush = new Brush("Blue", 10);
const redBrush = new Brush("Red", 12);

blueBrush.action()

console.log(blueBrush.colorname);
console.log(redBrush.colorname);
