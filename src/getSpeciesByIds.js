const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // ids que estão no teste
  const especiesFiltradas = species.filter((especie) => ids.includes(especie.id)); // se existir no elemento da iteração (especie), se inclui, um id que seja igual a um dos ids que estão colocados em teste: ocorre linha 9

  if (especiesFiltradas.length === 0) { // se especiesFiltradas, verifica que não existe nas iterações nos elementos, o id igual ao(s) id(s) do parâmetro, retorna para a função, um array vazio
    return [];
  }
  return especiesFiltradas; // se sim, retorno especiesFiltradas (um array com meu objeto que satisfaz a condição) para a função
}
module.exports = getSpeciesByIds;
