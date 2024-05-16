const veiculo1 = prompt('digite o nome do primeiro veiculo');
const velocidade1 = parseFloat(prompt('digite a velocidade do primeiro veiculo'));

const veiculo2 = prompt('digite o nome do segundo veiculo');
const velocidade2 = parseFloat(prompt('digite a velocidade do segundo veiculo'));

if(velocidade1 > velocidade2) {
  alert(veiculo1 + ' é mais rapido do que ' + veiculo2)
} else if( velocidade1 < velocidade2){
  alert(veiculo2 + ' é mais rapido do que ' + veiculo1)
} else {
  alert(veiculo2 + ' é tem a mesma velocidade ' + veiculo1)
}
