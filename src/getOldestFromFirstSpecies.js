const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((idEmployee) => idEmployee.id === id);
  const specie = data.species.find((Specie) => Specie.id === findEmployee.responsibleFor[0]);

  const animais = specie.residents.sort((animal1, animal2) => animal2.age - animal1.age);

  console.log(animais);
  return [animais[0].name, animais[0].sex, animais[0].age];
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;

// Linhas 5 : encontrando o funcionário passado como parâmetro. Acesso objeto employees, e ele me retora o primeiro elemento que possui o id (idEmployee), igual ao id que passei como parâmetro da função.
// linhas 6: encontrei o funcionário, que passei como parâmetro. Preciso encontrar a primeira espécie de animal que este funcionário se responsabiliza, onde contém os animais. Acesso meu arquivo data.species, que a cada iteração vai receber um elemento (objeto id especies) diverso. Quero que seja retornado, o id da especie dessas iterações, que seja igual ao primeiro id [(0] posição zero) do funcionário (findEmployee), primeio id referente a chave responsibleFor; que se trata da primeira espécie de animal gerenciada pelo meu funcionário. Retorno objeto da espécie, contendo dentro as informações dos animais em espécifico desta espécie
// linhas  8: pego meu specie (que contém meu objeto com a primeira espécie encontrada, com informações gerais e quais animais existentes dessa espécie). Acesso a chave residents desse objeto e passo dois elementos, a cada iteração um par de elementos (animais) será comparado, para verificar pela idade (animal1.age/aninal.age), qual o animal mais velho, ou seja, quero que sej retornado o array de objetos, com a ordenação do animal mais velho até o mais novo, decrescente, por isso animal.2 - animal.1
// Na linha 11, eu abro um array (porque quero que seja retornado um array), e retorno o nome de animais na posição zero, que é o Maxwell, o sex na posição zero que é male, e a age posição zero que é 15. Assim tenho o retorno em array contendo o nome, idade e sexo do animal mais velho, que é cuidado pelo meu funcionário
