// Crie um algoritmo que receba um número qualquer
// e apresente para o usuario o numero binario do valor apresentado velor
function decimalToBinary(number) {
  let result = [];
  let aux = 0;

  for (let i = 0; number > 0; i++) {
    aux = number % 2;
    number = (number - aux) / 2;
    result[i] = aux;
  }
  return result.reverse().join("");
}

while (true) {
  const userNumber = prompt("Digite o número que deseja converter para binário:");

  if (userNumber === null) {
    alert("Programa encerrado!");
    break;
  } else {
    const parsedNumber = parseInt(userNumber, 10);

    if (isNaN(parsedNumber) || parsedNumber < 0) {
      alert("Digite apenas números inteiros positivos!");
      continue;
    }

    const binaryNumber = decimalToBinary(parsedNumber);
    document.write(`O número ${parsedNumber} em binário é ${binaryNumber}`);
    break;
  }
}


// console.log(decimalToBinary(27)); // Deve imprimir '11011'
// console.log(decimalToBinary(100)); // Deve imprimir '1100100'

// 0 = 42/2
// 1 = 21/2
// 0 = 10/2
// 1 = 5/2
// 0 = 2/2
// 1 = 1/2

// 1 = 27/2
// 1 = 13/2
// 0 = 6/2
// 1 = 3/2
// 1 = 1/2
