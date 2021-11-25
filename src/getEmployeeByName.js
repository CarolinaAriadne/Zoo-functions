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

// linha 4: acessando objeto data, e objeto filho employees
// linha 5,6: quero encontrar o primeiro elemento que passa pelo find (cada iteração passa um objeto com id diferente), que satisfaça a condição. O firstame ou o lastName do elemento atual da iteração, precisa ser igual ao first.Name ou lastName passado na chamada da função (employeeName)
// linha 8: se verify for undefined (se o filter não encontrar o nome ou último nome igual ao parâmetro passado), retorna objeto vazio
// linha 11: se não for vazio, retorna ele mesmo verifyName, que no caso é o retorno do nome ou último nome
