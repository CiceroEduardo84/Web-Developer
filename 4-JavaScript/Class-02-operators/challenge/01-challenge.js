// Solicite 2 números e apresente:
// As operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes e atribua as operações de:
// +, -, *, /, %, ** e raiz para os números solicitados.

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

const operacao = {
    soma:(num1 + num2),
    subtracao:(num1 - num2),
    multiplicacao:(num1 * num2),
    divisao:(num1 / num2),
    resto:(num1 % num2),
    potenciacao:(num1 ** num2),
    raiz:(num1 ** (1/num2))
} 

document.write(`A soma de ${num1} e ${num2} e: ${operacao.soma} <br>`);
document.write(`A subtração de ${num1} e ${num2} e: ${operacao.subtracao} <br>`);
document.write(`A multiplicação de ${num1} e ${num2} e: ${operacao.multiplicacao} <br>`);
document.write(`A divisao de ${num1} para ${num2} e: ${operacao.divisao} <br>`);
document.write(`O resto da divisao de ${num1} para ${num2} e: ${operacao.resto} <br>`);
document.write(`A potenciaçâo de ${num1} elevado a ${num2} e: ${operacao.potenciacao} <br>`);
document.write(`A raiz ${num1} de ${num2} e: ${operacao.raiz} <br>`);