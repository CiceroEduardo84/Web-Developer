// Crie um programa que pergunte em que data o usuário nasceu
// Depois escreva na tela quantos anos ele tem

const dateWasBorn = new Date(prompt("Digite sua data (YYYY-MM-DD) de nascimento:"));
const dateNow = new Date();
const userAge = (dateNow - dateWasBorn) / 1000 / 60 / 60 / 24 / 365.25;
console.log(Math.floor(userAge));
