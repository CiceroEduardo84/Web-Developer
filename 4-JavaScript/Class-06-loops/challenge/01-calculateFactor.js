// Crie uma função para calcular o fatorial de um número
// Passe o número via argumento e use um FOR para operação
function calculateFactor
(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

const number = Number(prompt("Digite o número que deseja saber o fatorial:"));
const fatorial = calculateFactor
(number);
document.write(`O fatorial de ${number} é: ${fatorial}`);
