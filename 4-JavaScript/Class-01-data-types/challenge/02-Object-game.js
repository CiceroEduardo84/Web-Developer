// Crie um programa para cadastrar Jogo que irá solicitar ao usuário o nome, o gênero e o ano de lançamento do mesmo. Em seguida, monte um OBJECT contendo essas informações e por meio dele e imprima as características do jogo usando a função log.
let gameName = prompt("Digite seu nome do jogo:");
let gameGenre = prompt("Digite o gênero:");
let gameRealeaseYear = prompt("Digite o ano de lançamento:");

const game = {
    name:gameName,
    genre:gameGenre,
    realeaseYear:gameRealeaseYear,
}

console.log(game.name);
console.log(game.genre);
console.log(game.realeaseYear);