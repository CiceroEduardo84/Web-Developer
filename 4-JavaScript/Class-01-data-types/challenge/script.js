// Faça um programa que solicite (prompt) o nome do usuáio, dê as boas vindas e avise que irá fazer uma soma: Ex: Bem-vindo "nome", vamos fazer uma soma!

// Receba os números e apresente a soma com alerta (alert) na tela Ex: A soma do "número1" e o "número2" é "soma". (Use Template String)

let myName = prompt("Digite seu nome:");
alert("Olá "+myName+", vamos fazer uma soma!");

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));
let sum = number1 + number2;
alert(" A soma do " + number1 + " e o " + number2 + " é " +sum + ".");
