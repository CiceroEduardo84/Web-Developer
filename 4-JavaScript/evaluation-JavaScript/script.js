// ?Avaliação JavaScript

//* Questão 1 (Data Types):
// Declare as seguintes variáveis e atribua os valores por tipo: Sting, Number, Boolean, Function, Array, Object

let result1 = "Resolution";
let result2 = 2;
let result3 = true;
let result4 = () => {};
let result5 = ["A", "B", "C"];
let result6 = { nome: "Eduardo", tel: "9090 o resto tu inventa" };

//* Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;

let soma = 12 + 3;
let subtração = 12 - 3;
let multiplicação = 12 * 3;
let divisão = 12 / 3;
let resto = 12 % 3;
let potenciacao = 12 ** 3;
let raiz = 144 ** (1 / 2);

//* Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" concatenado com um valor passado como argumento e imprima seu retorno.

function test(value) {
  return "JavaScript" + value;
}
let value = 1;
console.log(test(value));

//* Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

let array1 = ["A", "B", "C"];
array1.push("D");
array1.shift();
array1.unshift("T");
console.log(array1);

//* Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let index = 0; index < array1.length; index++) {
  console.log(array1[index]);
}
for (const iterator of array1) {
  console.log(iterator);
}

//* Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let count = 0;
while (count <= 500) {
  if (count < 200 || count > 399) {
    console.log(count);
  }
  count++;
}

//* Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h

let velMoto = 50;
let statusMult;

if (velMoto > 60) {
  statusMult = "Você foi multado por alta velociade na via!";
} else if (velMoto < 60 / 2) {
  statusMult = "você foi multade pro velocidade baixa na via!";
} else {
  statusMult = "Você não tem multa!";
}
console.log(statusMult);

//* Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa
const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];

const newSalary = salary.map((value) => (value * 10) / 100 + value);
const total = newSalary.reduce((a, b) => a + b);

console.log(newSalary);
console.log(
  `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}`
);
