// Crie um programa que converta a temperatura Celsius ou Fahrenheit
// A temperatura de entrada e de saída deve conter a letra de referência ('C' ou 'F')
// O algoritmo deve ser capaz de interpretar o valor passado e converter para o outro (Ex: 10C = 50F)
// Deve funcionar com espaços, letras minúsculas e tratar dados inválidos (Throw, Try e Catch).

// C = (F - 32) * 5/9
// F = C * 9/5 + 32
function convertTemperature(temp) {
  let degreeTemp = String(temp).toUpperCase().split(" ").join("");
  let degreeArray = Array.from(degreeTemp);
  let indexF = degreeArray.indexOf("F")
  let indexC = degreeArray.indexOf("C")
  
  let scaleDegree = degreeArray.slice(indexF);
  let newDegree = Number(scaleDegree.join(""));

  return newDegree;

  if (type === "C") {
    return (temp * 9) / 5 + 32;
  } else if (type === "F") {
    return ((temp - 32) * 5) / 9;
  } else {
    throw new Error(
      "Escala não identificada, insira 'C' ou 'F': Ex: 10F ou 20C."
    );
  }
}

try {
  let temperature = " 10 F";
  console.log(convertTemperature(temperature));
} catch (error) {
  console.log(error);
}
