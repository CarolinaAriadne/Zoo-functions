const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const parametroVazio = Object.entries(data.hours);
  const acc = {};
  const changeObject = parametroVazio.reduce((acumulador, valorAtual) => {
    acc[valorAtual[0]] = {
      officeHour: `Open from ${valorAtual[1].open}am until ${valorAtual[1].close}pm`,
      exhibition: data.species
        .filter((objects) => objects.availability.includes(valorAtual[0]))
        .map((animais) => animais.name) };
    return acc;
  }, {});
  changeObject.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  if (Object.keys(changeObject).includes(scheduleTarget)) {
    return { [scheduleTarget]: changeObject[scheduleTarget] };
  }
  if (data.species.some((animal) => animal.name === scheduleTarget)) {
    return data.species.find((findAni) => findAni.name === scheduleTarget).availability;
  }
  return changeObject;
}

console.log(getSchedule());

module.exports = getSchedule;

// explicação linha por linha:

// 1) se nenhum parâmetro for passado, ou qualquer coisa for passada que não seja um animal ou um dia:
// preciso que haja o retorno de todos os dias, com os horários de funcionamento do zoo, e com os animais disponíveis de cada dia.
// - Na linha 4: Sendo assim, linha 4 declaro uma variável, para transformar o meu objeto hours que está no arquivo data, em um array. Isso porque, o reduce não recebe um objeto, ele recebe um array
// -Na linha 5: guardo meu acumulador inicial, em uma variável em razão do lint (para que acumulador não seja reatribuído)
// - Na linha 6:  eu passo variável parametroVazio (que traz um array com dias e horários de abertura e fechadamento); quero utilizar meu reduce, para criar (retornar) um objeto que possua chave  e dias com os horários de abertura/fechamento e os animais em exibição de cada dia
// - Na linha 7, eu preciso criar minha chave no objeto que ainda está vazio (acumulador). Eu acesso para isso, o meu acumulador (que retorna o array  com as chaves dos dias e mini - objeto/horários), pego o valor atual (que é o elemento a cada iteração (ex: Tuesday: {open 8, closed 10}) - uma iteração), e acesso a posição zero, que se trata da chave dia da semana. Abro chaves, porque significa que quero criar um mini-objeto.
// - Na linha 8, eu crio a chave office dentro do meu mini-objeto e passo o valor que é o horário de abertura e fechamento do dia (valorAtual posição 1 no array quando pego, é o número referente à hora - .open e .close pq estou pegando no arquivo data o open e close )
// - Na linha 9,10,11 , retornar array com animais diponíveis de cada dia- eu estou criando a chave exhibition,e passo data.especies.filter , para que o filter filtre nas especies de animais, nas chaves availability, se existe meu valor atual posição zero - que é  a chave referente ao dia, existindo, uso o map, que vai percorrer por cada elemento valorAtual[0] , isto é, vai percorrer cada chave, e retornar os nomes dos animais disponíveis - os nomes dos animais serão o valor em formato de array (filter retorna array), da minha chave exhibition
// - Na linha 12, eu retorno meu objeto com dias, horários e animais disponíveis, ou seja, meu acumulador que possui esse objeto populado com tudo isso, retorno para a minha variável changeObject

// 2) Na linha 14: se monday for passado como parâmetro da função, acessadmos nosso changeObject que cria para nós um objeto de objetos, e passamos .Monday para criar a chave Monday, e passamos o valor pra ela que é  a informação que o zoo está fechado

// 3) Na linha 15,16:se eu passar como parâmetro da minha função, um dia específico da semana: acesso as chaves do meu objectChange e verifico se existe uma chave que seja, que inclui o dia que passei como parâmetro. Em caso afirmativo, retorno  um objeto contendo a chave que passei como parâmetro, tendo como valor changeObject que é outro objeto, contendo dentro deste segundo objeto os horários de abertura e fechamento pra este dia específicos e os animasis disponíveis para este dia específico.

// 4) Na linha 18,19: se eu passar como parâmetro da minha função, um animal específico: uso o some, para verificar se em data.species, existe algum animal que possui o mesmo nome que passei para minha função. Se sim, uso o find para que seja retornado o primeiro animal encontrado em data.especie que possua o nome igual ao passado ao meu parâmetro, acesso availability pq quero que sejam retornados os dias que este animal passado como parâmetro, estão disponíveis, retorno um array com os dias (some retorna array)

// 5) Na linha 21 retorno meu changeObject para minha função getShedule

// teste - avaliador
