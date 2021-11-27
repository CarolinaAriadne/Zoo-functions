const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const species = data.species.reduce((acumulador, specie) => {
      const objeto = acumulador;
      objeto[specie.name] = specie.residents.length;
      return objeto;
    }, {});
    return species;
  }
  const findAnimal = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex === undefined) return findAnimal.residents.length;
  const animalSex = findAnimal.residents.reduce((acumulador, residente) => {
    let contador = acumulador;
    if (residente.sex === animal.sex) contador += 1;
    return contador;
  }, 0);
  return animalSex;
}

console.log(countAnimals({ specie: 'penguins', sex: 'male' }));

module.exports = countAnimals;

// se o parâmetro da função for vazio, quero retornar  um objeto com todos os nomes de animais com a quantidade de cada um deles. Para isso,  utilizo reduce com acumulador inicial objeto vazio {};  a cada iteração, eu acesso meu array de objetos species. Pego meu acumulador que está vazio {},e  crio dentro dele a chave com os nomes dos animais da minha espécie, por isso o specie.name, porque estou acessando o name do meu elemento atual specie; passo como valor specie.residentes.length, para acessar a quantidade de residentes que existe de cada animal, ou seja, isso vai me trazer a quantidade de animais que existem referente a minha chave animal criada.O retorno de species, será  um objeto contendo as chaves que serão os nomes de todos meus animais, tendo como valores, a quantidade que existe de cada animal.

// Na linha 12, estou acessando minhas especies para encontrar o nome (name) entre as espécies, que seja igual ao objeto que passei como parâmetro que contém  o nome de uma especie (ex.{ specie: 'penguins' }).

// Na linha 13, se não foi passado o sexo do nome do animal, ou seja, se for undefined, quero que o resultado seja somente a quantidade (número) de animais que existem referente ao animal que passei como parâmetro, vai me trazer o tamanho do array que é a quantidade de animais existentes.

// Na linha 14 a 18, se for passado como parãmetro um objeto contendo nome do animal e sexo (ex. { specie: 'bears', sex: 'female' }), quero que me retorne a quantidade de animais que existem do meu animal parâmetro, do sexo informado.Acesso meu findAnimal que me traz a cada iteração um animal diferente, e a chave residents, que me mostram quais animais (names)
// especificamente existem, quem são. Começo meu acumulador com zero, porque quero retorná - lo com a quantidade de animais (name) que existem do sexo informado. Meu reduce vai percorrer cada animal (name específico), se meu elemento atual referente a chave sex (resident.sex), for semelhante ao sexo informado em meu parâmetro (animal.sex), meu contador vai incrementar mais um, senão não, ao fim, terei o número exato da quantidade de animais específicos (names), do sexo informado, existem.
