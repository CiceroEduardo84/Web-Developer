const url = "https://api.github.com/users/CiceroEduardo";

console.log("inicio");

const githubUsers = fetch(url)
  .then((request) => request.json())
  .then(({ name, bio }) =>
    console.log({
      name,
      bio,
    })
  )
  .catch((error) => console.log(error))
  .finally(() => console.log("Fim da requisição!"));

console.log(githubUsers);

console.log("Fim");
