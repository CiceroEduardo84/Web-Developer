// >>>>>>>>> CONDITIONALS <<<<<<<<<<<

// >>>>>> If, Else <<<<<<<

// let thereIsSmooke = true

const userAge = {
  nome: "João da Bacurinha",
  idade: 71,
};
if (userAge.idade >= 16) {
  if (userAge.idade >= 18 && userAge.idade <= 70) {
    console.log("Voto Obrigatório");
  } else {
    console.log("Voto Facultativo");
  }
} else {
  console.log("Não pode votar");
}

if ((userAge.idade >= 16 && userAge.idade < 18) || userAge.idade > 70) {
  console.log("Voto Facultativo");
} else if (userAge.idade >= 18 && userAge.idade <= 70) {
  console.log("Voto obrigatoria");
} else {
  console.log("Não pode votar");
}

// console.log(userAge >= 18 ? "Voto Obrigatorio" : "Voto Facultativo")
