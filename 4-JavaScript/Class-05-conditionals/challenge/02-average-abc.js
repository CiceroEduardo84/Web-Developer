// Crie uma função para converter média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60

function calculateAvarage(note01, note02) {
  let media = (Number(note01) + Number(note02)) / 2;
  
  if (!media) {
    document.alert("Insira somente notas válidas!");
  }

  return media;
}

function convertMedia(media) {
  let noteAbc;

  Number(media);
  if (media >= 90 && media <= 100) {
    noteAbc = "A";
  } else if (media >= 80 && media < 90) {
    noteAbc = "B";
  } else if (media >= 70 && media < 80) {
    noteAbc = "C";
  } else if (media >= 60 && media < 70) {
    noteAbc = "D";
  } else if (media >= 0 && media < 60) {
    noteAbc = "F";
  } else {
    alert("Média inválida!");
  }

  return noteAbc;
}

function situationStudent(note) {
  let situation;

  String(note);
  switch (note) {
    case "A":
      situation = "Excelente, aprovado com A!";
      break;
    case "B":
      situation = "Muito bem, aprovado com B!";
      break;
    case "C":
      situation = "Aprovado com C!";
      break;
    case "D":
      situation = "Foi quase, reprovado com D!";
      break;
    case "F":
      situation = "Precisa estudar mais, reprovado com F!";
      break;
    default:
      situation = "Nota ABC Inválida!";
  }

  return situation;
}

let note01 = 10;
let note02 = "10";

let avarageStudant = calculateAvarage(note01, note02);
console.log(avarageStudant);

let noteStudant = convertMedia(avarageStudant);
console.log(noteStudant);

let situation = situationStudent(noteStudant);
console.log(situation);
