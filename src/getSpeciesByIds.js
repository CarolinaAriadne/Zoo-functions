const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    const specieId = data.species.find((specie) => specie.id === id);
    result.push(specieId);
  });
  return result;
}
module.exports = getSpeciesByIds;
