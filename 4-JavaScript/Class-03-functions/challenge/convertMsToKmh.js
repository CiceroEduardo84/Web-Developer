// Crie uma função para converter velocidade de m/s para km/h
// Solicite a velocidade ao usuário via prompt
// Escreva (write) na tela o resultado

const userSpeed = Number(prompt("Digite a veocidade em m/s:"));
const convertMsToKmh = (speed) => speed * 3.6;
document.write(`${userSpeed}m/s é igual a ${convertMsToKmh(userSpeed)}km/h`);
