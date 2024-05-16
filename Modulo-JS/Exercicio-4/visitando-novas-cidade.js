
let turista = prompt('E ai, qual é seu nome?');
let cidades = '';
let contagem = 0;

let continuar = prompt('Você visitou alguma cidade?');

while (continuar == 'sim'){
  let cidade = prompt('qual foi o nome da cidade?');
  cidades += ' - ' + cidade + '\n';
  contagem ++;
  continuar = prompt('Você visitou alguma outra cidade?');
}

alert(
  'Turista: ' + turista +
  '\nQuantidade: ' + contagem +
  '\nCidades: \n' + cidades 
)
