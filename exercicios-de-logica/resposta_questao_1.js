// 1 - Crie uma função que receba um valor INTEIRO positivo, e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE. Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)
// Condição: Se Digitos estão em ordem crescente ou decrescente
// Deve permitir/considerar digitos iguais como sequencial

// ## Entrada -> Param

//  2 retornos: 
//  - Ordenado/Não Ordenado
//  - Crescente/Decrescente

// 1. Inicio
// 2. ler entrada
// 3. Roda função passando o param de entrada
// 4. Atribui entrada a variavel  
// 5. Verifica ordenação
// 6. Verifica se está crescente/decrescente
// 7. Verifica se existe números iguais
// 8. se sim, formata input
// 9. Fim

// Esta função recebe uma sequencia númerica como entrada e retorna uma string 
// indicando se os dígitos estão ordenados (crescente ou decrescente) e também retorna 
// a entrada formatada com espaços entre os dígitos.

function verificaEntrada(entrada) {
    // Transforma a entrada em uma string
    let entradaString = entrada.toString();
    // Converte cada caractere para número -- muito usado em regex
    let digitos = entradaString.split('').map(Number); 


 // Verifica ordem crescente
 let crescente = digitos.every((digito, index) => index === 0 || digito >= digitos[index - 1]);
    
 // Verifica ordem decrescente
 let decrescente = digitos.every((digito, index) => index === 0 || digito <= digitos[index - 1]);
 
 // Verifica números iguais
 let iguais = digitos.some((digito, index) => digito === digitos[index + 1]);
 
 let entradaFormatada = digitos.join(' ');
    if (crescente && iguais) {
        return `Ordenado: Crescente, Input: ${entradaFormatada}`;
      } else if (decrescente && iguais) {
        return `Ordenado: Decrescente, Input: ${entradaFormatada}`;
      } else {
        return `Não Ordenado: Input: ${entradaFormatada}`;
    }
}

console.log(6,4,5,8,9,4,6,5) // Não ordenado
console.log(9,9,8,8,7,6,5,4,3) // Ordenado: Descrescente