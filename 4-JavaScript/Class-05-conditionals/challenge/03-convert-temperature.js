// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function degreeConvert(degree) {
  const degreeAux = degree.split(" ").join("");
  const arrayDegree = Array.from(degreeAux);
  const scaleDegree = arrayDegree.pop().toUpperCase();
  const newDegree = Number(arrayDegree.join(""));

  if (isNaN(newDegree)) throw new Error("Valor inválido!");

  function convertCelsiusToFahrenheit() {
    return ((newDegree * 9) / 5) + 32;
  }
  function convertFahrenheiToCelsius() {
    return ((newDegree - 32) * 5)/9;
  }

  switch (scaleDegree) {
    case "C":
      return convertCelsiusToFahrenheit() + "F";
    case "F":
      return convertFahrenheiToCelsius() + "C"
    default:
      throw new Error("Escala não Identificada!")
  }
}

try {
  const temperature = "300  f c";
  const temperatureConverted = degreeConvert(temperature);
  console.log(`${temperature.toUpperCase()} = ${temperatureConverted}`);
} catch (error) {
  console.error(error);
}
