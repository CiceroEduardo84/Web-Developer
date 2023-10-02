//Switch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const weekDay = new Date().getDay(); //0-6

console.log(weekDay);

switch (weekDay) {
  case 0:
    console.log("Domingo");
    break;

  case 1:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Terça-feira");
    break;

  case 3:
    console.log("Quarta-feira");
    break;

  case 4:
    console.log("Quinta-feira");
    break;

  case 5:
    console.log("Sexta-feira");
    break;

  case 6:
    console.log("Sábado");
    break;

  default:
    console.log("Dia não encontrado!");
    break;
}

// let month = "4";

// switch (month) {
//   case "1":
//   case "2":
//   case "3":
//     console.log("Primavera");
//     break;

//   case "4":
//   case "5":
//   case "6":
//     console.log("Verão");
//     break;

//   case "7":
//   case "8":
//   case "9":
//     console.log("outono");
//     break;

//   case "10":
//   case "11":
//   case "12":
//     console.log("inverno");

//   default:
//     break;
// }

const option = prompt(`
  Digite a opção desejada:

  1.Consultoria
  2.Atendimento
  3.Encerrar
`);

switch (option) {
  case "1":
    alert("Vamos agendar sua consulta.");
    break;

  case "2":
    alert("Vamos transferir para um de nossos atendentes.");
    break;

  case "3":
    alert("Obrigado, volte sempre.");
    break;

  default:
    alert("Opção inválida")
    break;
}
