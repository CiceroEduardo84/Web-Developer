// Crie um algoritmo que adivinhe um número de 1 a 10
// Capture o número de tentativas enquando não acertar
// O programa deve ser encerrado caso o usuário clique em cancelar

const numberDivination = Math.ceil(Math.random() * 10);
let count = 1;

while (true) {
  let numberUser = prompt("Advinhe um número de 1 a 10:");

  if (numberUser == null) {
    alert("Programa encerrado!");
    break;

  }else if (numberUser == "" || isNaN(numberUser)) {
    alert("Insira um número de  1 a 10!");
    continue;

  } else if (numberUser > 100 || numberUser < 1) {
    alert("Atenção, número fora do intervalo de 1 a 10");
    continue;

  }else if (Number(numberUser) == numberDivination) {
    alert(`Parabêns! Acertou o número ${numberDivination} em ${count} tentativa(s)`);
    break;
  }
  
  count++;
}
