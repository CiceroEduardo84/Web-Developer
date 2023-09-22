// Construa uma lógica para dizer se um número é par ou é ímpar
// Receba o número desejado do usuário via promp
// Escreve na tela o número e se ele é par ou é ímpar

const num1 = Number(prompt("Digite um número para saber se é par ou é ímpar:"));
const result = num1 % 2 == 0 ? "Par" : "Impar";

window.alert(`O número ${num1} é ${result}`);
