// 2 - Crie uma função que receba um array de inteiros como parâmetro e verifique
//  se neste array existem números duplicados, caso exista, retorne um novo array 
// com os valores que se repetem.

// 1. Inicio
// 2. Ler Entrada
// 3. Roda função com param de entrada
// 4. Atribui entrada a variavel
// 5. Verifica a entrada e busca por número duplicados
// 6. Gera um novo array com os números duplicado, se existir.
// 7. Fim

// Para essa função vou usar o new Set() que é uma estrutura de dados em JS que vai representar o array com valores de entrada
// Assim podemos adicionar os elementos usando o add() e verificar o elemento com o has()

function verificaEntrada(array) {
  // Estrutura de dados
  let conjunto = new Set();

  let duplicados = [];

  for (let i = 0; i < array.length; i++) {
      let elemento = array[i];
      // Se o elemento já estiver no conjunto, é um número duplicado
      if (conjunto.has(elemento)) {
          // Adiciona o elemento aos duplicados se ainda não estiver lá
          if (!duplicados.includes(elemento)) {
              duplicados.push(elemento);
          }
      } else {
          // Se o elemento não estiver no conjunto, adiciona ele ao conjunto
          conjunto.add(elemento);
      }
  }

  return duplicados;
}

const entrada = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];
const duplicadosEncontrados = verificaEntrada(arrayExemplo);
console.log("Duplicados:", duplicadosEncontrados);
