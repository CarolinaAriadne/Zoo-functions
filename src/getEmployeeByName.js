const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const verifyName = data.employees.find(
    (elemento) =>
      elemento.firstName === employeeName || elemento.lastName === employeeName,
  );
  if (verifyName === undefined) {
    return {};
  }
  return verifyName;
}

console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
