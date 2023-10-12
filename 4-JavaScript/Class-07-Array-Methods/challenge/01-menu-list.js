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
  if (menuOption === "4" || menuOption === null) {
    break;
  }
}
alert("Programa encerrado!");
