// 3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres 
// '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma sequência válida ou não. 
// Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente

// ### CONDIÇÃO: A sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente

// 1. Inicio
// 2. Ler entrada
// 3. Roda função com param de entrada
// 4. Atribui entrada a variavel
// 5. Verificia sequência

// Uma pilha é uma estrutura de dados na qual os elementos são adicionados e removidos seguindo a política "último a entrar, primeiro a sair" (LIFO - Last In, First Out). Isso significa que o último elemento adicionado a uma pilha é o primeiro a ser removido.
// No contexto deste exercício, estamos usando uma pilha para rastrear os caracteres de abertura ((, {, [) à medida que percorremos a sequência de entrada. Quando encontramos um caractere de fechamento (), }, ]), podemos compará-lo com o último caractere aberto que ainda está na pilha.
//  Se eles corresponderem, o último caractere aberto é removido da pilha.

function verificaEntrada(sequencia) {
  const pilha = [];
  const mapeamento = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  let i = 0;
  console.log("sequencia.length", sequencia.length)
  while (i < sequencia.length) {
      const caractere = sequencia[i];
      console.log("caractere", caractere)

      if (caractere === '(' || caractere === '{' || caractere === '[') {
        pilha.push(caractere);
        console.log("pilha", pilha)
      } else if (caractere === ')' || caractere === '}' || caractere === ']') {
          // atribui o caractere de fechamento ao ultimo aberto  
          const ultimoAberto = pilha.pop();

          // Verifica sem o ultimo caractere aberto correponde no array com o caractere
          if (ultimoAberto !== mapeamento[caractere]) {
              return false;
          }
      }

      i++;
  }

  return pilha.length === 0;
}
console.log(verificaEntrada("(){}[]")); // true
console.log(verificaEntrada("({[({[]})]})")); // true
console.log(verificaEntrada("{[()}")); // false
