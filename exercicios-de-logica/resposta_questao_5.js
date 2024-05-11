// 5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos modos distintos os amigos
//  podem se organizar para tirar a foto? Desenvolva uma função que receba um número de pessoas (valor inteiro) 
// e retorne quantas possibilidades de organização existem para que o fotografo saiba o número de modos 
// distintos que esse grupo e outros grupos possam se organizar.

// Para calcular isso usamos o fatorial do número de pessoas

// entrada = 5
// entradaN! : 5 x 4 x 3 x 2 x 1

function calculaPossibilidades(pessoas){

  // Calcular o fatorial
  let fatorial = 1;
  for (let i = 1; i <= pessoas; i++) {
    fatorial *= i;
  }
  
  return fatorial;
}

const numeroDeModos = calculaPossibilidades(5);
console.log("Número de modos distintos para o grupo:", numeroDeModos);