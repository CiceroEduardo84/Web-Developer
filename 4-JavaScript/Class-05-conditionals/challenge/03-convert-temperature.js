// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32
function convertTemperature(temp) {
  let degreeTemp = String(temp).toUpperCase().split(" ").join("");
  let degreeArray = Array.from(degreeTemp);
  let indexF = degreeArray.indexOf("F");
  let indexC = degreeArray.indexOf("C");
  let scaleDegree;
  let newDegree;

  if (indexF != -1) {
    scaleDegree = degreeArray.splice(indexF, 1).join("");
  } else if (indexC != -1) {
    scaleDegree = degreeArray.splice(indexC, 1).join("");
  }

  newDegree = Number(degreeArray.join(""));

  if (isNaN(newDegree) || (scaleDegree !== "C" && scaleDegree !== "F")) {
    throw new Error("Valor inválido! Insira conforme exemplo: 10F ou 20C.");
  } else if (scaleDegree == "C") {
    return ((newDegree * 9) / 5 + 32).toLocaleString("pt-BR") + "F";
  } else if (scaleDegree == "F") {
    return (((newDegree - 32) * 5) / 9).toLocaleString("pt-BR") + "C";
  } else {
    throw new Error("Escala não identificada, insira 'C' ou 'F': Ex: 10F ou 20C.");
  }
}

try {
  let temperature = "2c0";
  console.log(
    `${temperature.toUpperCase().split(" ").join("")} = ${convertTemperature(
      temperature
    )}`
  );
} catch (error) {
  console.log(error);
}
