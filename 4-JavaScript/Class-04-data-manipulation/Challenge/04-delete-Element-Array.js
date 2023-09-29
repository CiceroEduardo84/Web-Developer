// Crie uma função que remova um elemento específico de um Array
// Insira o nome do elemento e o array via parâmetros
// Retorne o array com valor atualizado

function deleteElementArray(element, array) {
  const index = array.indexOf(element);
  index != -1 ? array.splice(index, 1) : "";
  return array;
}

const techs = ["'HTML", 10, "CSS", 20, "JavaScript", 30];
console.log(deleteElementArray("HTML", techs));
