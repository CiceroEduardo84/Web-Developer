// Crie uma função que reproduza a sequencia de Fibonacci
// Passe como argumento quantos números deseja reproduzir
function sequenciaFibonacci(number) {
  if (number <= 0) return null;
  if (number === 1) return 0;

  let result = [0, 1];
  for (let i = 2; i < number; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

let number = Number(prompt("Digite quantos números de fibonacci deseja:"));
const seq = sequenciaFibonacci(number);
document.write(seq);
