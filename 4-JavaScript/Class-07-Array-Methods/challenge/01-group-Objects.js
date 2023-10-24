// Desafio 2: Agrupamento de objetos

// Crie um array de objetos onde cada objeto tem propriedades 'nome' e 'categoria'.
// Use reduce para agrupar os objetos por categoria, resultando em um objeto onde as chaves são as categorias e os valores são arrays de objetos dessa categoria.

const arrayObject = [
  {nome:'Alice',categoria:'A'},
  {nome:'Bastos',categoria:'B'},
  {nome:'Arthur',categoria:'B'},
  {nome:'Carlos',categoria:'D'},
]

const groupedByCategory = arrayObject.reduce((acc, obj) => {
  const category = obj.categoria;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(obj);
  return acc;
}, {});

console.log(groupedByCategory);