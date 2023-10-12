// Faça um Menu com as seguintes opções:
/*
Digite a opção desejada:
1 - Cadastrar item
- Poder cadastrar itens enquanto não cancelar
- Alertar usuário para adicionar item caso não informe
- Mostrar mensagem de sucesso junto do nome ao cadastrar
- Fazer alerta de item cadastrado caso ele já esteja cadastrado
2 - Ver itens cadastrados
- Mostrar itens cadastrados
- Alertar caso a lista esteja vazia
3 - Remover item cadastrado
- Alertar caso a lista esteja vazia
- Poder remover itens pelo nome enquanto não cancelar
- Remover item automaticamente caso só tenha um na lista
- Mostrar mensagem de sucesso junto do nome ao remover
- Alertar usuário caso o item informado não seja encontrado
4 - Sair do programa
- Sair do programa quando escolher a opção 4 ou cancelar
- Se não escolher uma das opções do menu mostrar mensagem de alerta
*/
const listItens = [];
let menuOption;

while (true) {
  menuOption = prompt(`
    Digite a opção desejada:
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa
    `);

  if (menuOption == "") {
    alert("Escolha uma das opções!");
  }
  if (menuOption === "4" || menuOption === null) {
    break;
  }

  switch (menuOption) {
    case "1":
      while (true) {
        let registerItems = prompt("Digite o Item a ser inserido:");
        let toSpaces;

        if (registerItems === null) {
          break;
        }

        toSpaces = registerItems.trimStart().trimEnd();
        if (toSpaces === "") {
          alert("Digite um item!");
          continue;
        }
        if (listItens.includes(toSpaces)) {
          alert("Item já está cadastrado!");
          continue;
        } else {
          listItens.push(toSpaces);
          alert(`Item "${toSpaces}" cadastrado com sucesso!`);
          continue;
        }
      }
      break;

    case "2":
      if (listItens.length === 0) {
        alert("Lista vazia!");
      } else {
        alert(listItens.join("" + "\n"));
      }
      break;

    case "3":
      break;

    default:
      alert("Opção invalida!");
  }
}
alert("Programa encerrado!");
