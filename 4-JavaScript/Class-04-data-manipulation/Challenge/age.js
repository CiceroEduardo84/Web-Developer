// Crie um programa que pergunte em que data o usuário nasceu
// Depois escreva na tela quantos anos ele tem
const ageIni = new Date(prompt("Digite sua data (YYYY-MM-DD) de nascimento:"));
const dateToDay = new Date();
const ageCalculate = (dateToDay - ageIni) / 1000 / 60 / 60 / 24 / 365.25;

document.write(`Você tem: ${Math.floor(ageCalculate)} anos.`);
