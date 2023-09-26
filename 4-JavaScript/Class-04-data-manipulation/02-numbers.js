let num1 = 2.5;
let num2 = -22345;

console.log(num1);
console.log(parseInt(num1));
console.log(parseFloat(num2)); //Ponto flutuante
console.log(String(num2).length);
console.log(String(num1.toFixed(2)).replace(".", ","));

console.log((2.4784748787474874).toFixed(2).replace(".", ","));
console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl",})); //usd

console.log(num1);
console.log(Math.abs(num2));

const number = [2, 4, 5, 6, 7, 8, 4, 3, 2, 4, 678, 4, 3, 33, 3, 5];

console.log(Math.max(1, 2, 3));
console.log(Math.max(...number));
console.log(Math.max(2, 4, 5, 6));

console.log(Math.min(1, 2, 3));
console.log(Math.min(...number));
console.log(Math.min(2, 4, 5, 6));

console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(2.6));//arredondar
console.log(Math.random());// 0 > value < 1 
console.log(Math.round(Math.random() * 100));
console.log(Math.round(Math.random() * 10));
console.log(Math.ceil(Math.round(Math.random() * 10))); //0-10
console.log(Math.floor(Math.round(Math.random() * 10)));//0-9
console.log(Math.floor(Math.random() * 10) + 1);//0-9
console.log(Math.floor(2.9388337773));
console.log(Math.ceil(2.00000000000001));

console.log(Math.ceil(0));

// -----Warning-----
// while (Math.ceil(Math.random()*2) != 0) {
//   console.log("Rodando...");
// }