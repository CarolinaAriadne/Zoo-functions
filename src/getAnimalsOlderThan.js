/* eslint-disable no-unused-vars */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(species2, age2) {
  const findSpecie = species.find((actualElement1) => {
    // acessando species;
    if (actualElement1.name === species2) {
      // a cada iteração, se o nome contido em species for igual a species2 (otters);
      return true; // retorna true;
    }
    return false;
  });
  const verifyAge = findSpecie.residents.every((actualElement2) => {
    // acessando o objeto que contém name otters que veio de findSpecie, acessando otters - acessando os residents dele - a cada iteração, é um animal diferente;
    if (actualElement2.age >= age2) {
      // se o animal acessado no momento possuir idade maior ou igual a age2  (7);
      return true; // retorna true;
    }
    return false;
  });

  return verifyAge; // o retorno de verifyAge (neste caso é true), é retornado em result que se refere a variável que guarda a função;
}

const result = getAnimalsOlderThan('otters', 7);

module.exports = getAnimalsOlderThan;

console.log(result);
