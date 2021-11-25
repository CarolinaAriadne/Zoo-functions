const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especiesFiltradas = species.filter((especie) => ids.includes(especie.id));

  if (especiesFiltradas.length === 0) {
    return [];
  }
  return especiesFiltradas;
}
module.exports = getSpeciesByIds;
