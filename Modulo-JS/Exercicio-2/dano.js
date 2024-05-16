const personagemAtacante = prompt('nome do personagem atacante:');
const poderDeAtaque = parseFloat(prompt('poder de ataque:'));

const personagemDefensor = prompt('nome do personagem defensor:');
let pontosDeVida = parseFloat(prompt('quantos pontos de vida ele possui:'));
const poderDeDefesa = parseFloat(prompt('poder de defesa:'));
let possuiEscudo = prompt('possui escudo: (sim ou nao)');

let danoCausado = 0;

if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'nao' ){
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'sim'){
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2; 
} 

pontosDeVida -= danoCausado;

alert(
  personagemAtacante + ' causou: ' + danoCausado + ' de dano' +
  '\npontos de vida restante de ' + personagemDefensor + ': ' + pontosDeVida
  )





