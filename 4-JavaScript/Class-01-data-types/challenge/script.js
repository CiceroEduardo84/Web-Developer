// Faça um programa que solicite (prompt) o nome do usuáio, dê as boas vindas e avise que irá fazer uma soma: Ex: Bem-vindo "nome", vamos fazer uma soma!

// Receba os números e apresente a soma com alerta (alert) na tela Ex: A soma do "número1" e o "número2" é "soma". (Use Template String)

let myName = prompt("Digite seu nome:");
alert("Olá "+myName+", vamos fazer uma soma!");

const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const addition = num1 + num2;
alert(`A soma do ${num1} e o ${num2} é: ${addition}`);
