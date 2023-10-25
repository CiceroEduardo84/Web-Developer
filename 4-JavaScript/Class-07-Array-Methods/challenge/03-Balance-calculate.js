// Crie uma lógica para calcular o somatório das Receitas e das Despesas abaixo
// Imprima os somatórios e o saldo formatado no padão brasileiro,
// Informe se a situação está positiva ou negativa e se existe dívidas.

const incomes = [
  "salary",
  "R$ 2000,00",
  "commission",
  "R$ 825,45",
  "bônus",
  "R$ 320,00",
];

const expenses = [
  "rent",
  "R$ 500,00",
  "energy",
  "R$ 325,55",
  "water",
  "R$ 120,34",
  "food",
  "R$ 1300,62",
  "cabaré",
  "R$ 898,94",
];

const incomesValues = incomes.filter((value) => value.includes("R$"));
const incomesValuesNumbers = incomesValues.map((value) => {
  return Number(value.replace("R$", "").replace(",", "."));
});
const sumIncomes = incomesValuesNumbers.reduce((a, b) => a + b);

const expensesValues = expenses.filter((value) => value.includes("R$"));
const expensesValuesNumbers = expensesValues.map((value) => {
  return Number(value.replace("R$", "").replace(",", "."));
});
const sumExpenses = expensesValuesNumbers.reduce((a, b) => a + b);

let statusBalance;
let resultbalance = sumIncomes - sumExpenses;

if (sumIncomes > sumExpenses) {
  statusBalance = "Existe um saldo positivo na sua conta!";
} else if (sumIncomes < sumExpenses) {
  statusBalance = "Conta está vazia e existe dividas!";
} else if (sumIncomes === sumExpenses) {
  statusBalance = "Sem saldo mas sem dívidas!";
}

console.table(`
  Salário:${sumIncomes.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}
  Dispesas:${sumExpenses.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}
  Saldo:${resultbalance.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  })}
  ${statusBalance}`);
