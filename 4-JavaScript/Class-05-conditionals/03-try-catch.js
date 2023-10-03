function runAplication() {
  return "Running...";
}

try {
  document.write(runAplication());
} catch (error) {
  //hoisting
  console.error(error);
} finally {
  console.log("Sempre será executado!!!!");
}

document.write("Aplication is living...");

function divideNumbers(num1, num2) {
  if (num2 == 0) throw new Error("Não é possivel dividir por 0, abestado!");

  return num1 / num2;
}

console.log(divideNumbers(0, 6));
