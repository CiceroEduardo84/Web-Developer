//reduce
const arrayNumbers = [2, 4, 5, 8, 9, 4];

const sumArrayNumbers = arrayNumbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 100);

console.log(sumArrayNumbers);

const shoppingCart = [
  { product: "Arroz", amount: 2, price: 20.0 },
  { product: "Café", amount: 3, price: 40.0 },
  { product: "Feijão", amount: 4, price: 60.0 },
];

const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.price * currentValue.amount;
}, 0);

console.log(sumShoppingCart);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6];

const somaPares = array.reduce((acumulador, valorAtual) => {
  if (valorAtual % 2 === 0) {
    return acumulador + valorAtual;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaPares);
