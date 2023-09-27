// Crie uma função capaz de retornar um número
// aleatório dentro de um intervalo determinado
// por parâmetros min(mínimo) max(máximo).
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(10, 20));
