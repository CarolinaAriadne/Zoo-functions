const data = require('../data/zoo_data');

function countEntrants(entrants) { // recebe array de objetos, visitantes
  const returnObject = entrants.reduce(
    (acumulador, valorAtual) => { // acumulador começando com objeto que quero que retorne, zerado
      const objeto = acumulador; // guardando acumulador em variável (em razão do lint)
      if (valorAtual.age < 18) {
        objeto.child += 1; // se o elemento atual, chave idade, menor que 18, então o meu acumulador incrementa 1 para child
      }
      if (valorAtual.age >= 18 && valorAtual.age < 50) {
        objeto.adult += 1; // idem
      }
      if (valorAtual.age >= 50) { // idem
        objeto.senior += 1;
      }
      return objeto; // retorno acumulador com o resultado final de quantidade de cada tipo de pessoa, retorno par returnObject
    },
    { child: 0, adult: 0, senior: 0 }, // valor inicial acumulador
  );

  return returnObject; // retorna o resultado da função, para onde a função é chamada, no caso, para a variável result abaixo na segunda função
}

function calculateEntry(entrants) { // espera receber na chamada da função como parâmetro, um nome de pessoa com a idade dela
  if (entrants === undefined || Object.keys(entrants).length === 0) { // se essa função não recebe  parâmetro nenhum, ou seja, é indefinida, retorna zero; ou se object.keys entrants (ou seja o objeto que receberia nome e idade como parâmetro), tem tamanho zero, ou seja, é um objeto vazio { }, retorna zero também.
    return 0;
  }

  const result = countEntrants(entrants); // chamando a função count, dentro da calculate, porque pra eu calcular o preço das entradas na calculate, eu preciso ter a informação de quantas pessoas existem e onde elas se encaixam, como adulto, criança ou senior

  return (result.child * data.prices.child)
   + (result.adult * data.prices.adult) + (result.senior * data.prices.senior); // esse é meu "else" - se houver parâmetro na função calculate, que não seja vazio e que não seja undefined, então com a chamada da primeira função, que traz o objeto com quantidade de pessoas e quais tipos de pessoas, eu verifico qual o valor de preço  que cada categoria irá  totalizar e somo os totais de cada categoria, para obter um total final.*Acesso minha const result, que guarda o objeto com tipos de pessoas e quantidades, e somo o valor de cada categoria, acessando os preços  em data.prices; retornando por fim o total geral que é a soma do total de todas as categorias*
}

module.exports = { calculateEntry, countEntrants };
