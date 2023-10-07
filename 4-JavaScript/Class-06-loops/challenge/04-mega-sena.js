// Crie um algoritmo que sortei os números da Mega-Sena
// São 6 números aleatórios não duplicados de 1 a 60
// Coloque em ordem crescente, com 0 a esquerda e separe com "-"

const num = [];

while (num.length < 6) {
  let sort = String(Math.ceil(Math.random() * 60)).padStart(2, 0);
  if (!num.includes(sort)) {
    num.push(sort);
  }
}

document.write(num.sort((a, b) => a - b).join("-"));
