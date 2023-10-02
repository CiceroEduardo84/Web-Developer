// Crie uma função para calcular média do aluno
// A média da escola é 7 e ela realiza duas provas
// Apresente a média e a situação se aprovado ou reprovado

function studentAverage(grade1, grade2) {
  return (grade1 + grade2) / 2;
}

const grade1 = Number(prompt("Nota 1: "));
const grade2 = Number(prompt("Nota 2: "));

const average = studentAverage(grade1, grade2);

if (average >= 7) {
  alert(`Média: ${average}\n Situação: aprovado`);
} else if (average >= 4) {
  alert(`Média: ${average} \n Situação: recuperação`);
} else {
  alert(`Média: ${average} \n Situação: reprovado`);
}
