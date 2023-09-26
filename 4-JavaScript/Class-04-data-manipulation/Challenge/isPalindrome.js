// Crie uma função para verificar palíndromos
// A lógica deve receber string com palavra ou texto
// Use um ternário para imprimir "Verdadeiro" ou "Falso" na tela

function palindromeCheck(texte) {
  const normalText = texte.toLowerCase().replaceAll(" ", "");
  const reverseText = normalText.split("").reverse().join("");

  return normalText === reverseText;
}

const isPalindrome = prompt("Digite o possivel palindromo:");
const result = palindromeCheck(isPalindrome);
alert(result ? "Verdadeiro" : "Falso");
