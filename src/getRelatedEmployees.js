const data = require('../data/zoo_data');

function isManager(id) { // recebe o id de um gerente
  const manager = data.employees.some((employeeActual) =>
    employeeActual.managers.includes(id)); // acesso employees, verifico se a chave managers de cada funcionário a cada iteração, essa chave recebe um array de ids de gerentes se o funcionário tem gerente, verifico se nesse array de ids existe o id que passei como parâmetro pra função, se sim, quer dizer que meu id do parâmetro se refere a uma pessoa que é gerente

  return manager; // retorno true se for gerente ou false senão, pra minha função
}

function getRelatedEmployees(managerId) { // se eu chamar a função, passo um parâmetro, que vai ser um id de algum gerente
  if (!isManager(managerId)) { // se a função isManager for falsa (pessoa não é gerente, o id de managerId não é de um gerente)
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // retorno um erro
  } else { // se a função isManager for true, ou seja, o id passado se trata do id de um gerente
    const employees = data.employees.filter((employee) => { // se for true, eu vou acessar os empregados, pegar cada elemento, cada funcionário
      const managers1 = employee.managers; // armazenando os arrays de gerentes dos empregados a cada iteração
      return managers1.some((id) => id === managerId); // acessando os gerentes (o array de ids de managers), pra ver se algum deles possui o id igual ao id que passei no meu parâmetro managerId, já retorna pra employees, se for igual, quer dizer que é gerente
    });
    return employees.map((employee) => `${employee.firstName} ${employee.lastName}`); // quero os nomes dos funcionários que esse gerente gerencia. Uso o map, para iterar sobre meus employees (que contém os funcionários que possuem o id, ou os ids de gerente, que passei como parâmetro), a cada iteração, quero que ele retorne em um novo array, o nome e último nome destes funcionários
  }
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
