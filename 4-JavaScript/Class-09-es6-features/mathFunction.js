export function sumNumbers(num1, num2) {
  return num1 + num2;
}

function sum(num1, num2) {
  return num1 + num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}

// export { div, sub, mult };
export const mathOperations = { sum, sub, div, mult };
