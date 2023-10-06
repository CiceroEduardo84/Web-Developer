// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

let count = 0; //flag = bandeira
while (count <= 10) {
  if (count % 2 === 0) {
    console.log(count);
    // count++;
    // continue;
    // break;
  }
  count++; //container
}

let count2 = 0;
let noia = 1;
while (noia < 500) {
  noia = count2 * 2;
  count2++;
  console.log(noia);
}

while (true) {
  let resp = prompt("Deseja encerrar?");

  if (resp) {
    alert("Obrigado pela sua visita");
    break;
  }
}
