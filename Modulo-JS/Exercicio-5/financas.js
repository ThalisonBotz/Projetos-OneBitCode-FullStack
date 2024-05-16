let saldo = parseFloat(prompt('informe a quantidade de dinheiro inicial'));
let opcao = '';

do {
  opcao = prompt('Seja bem-vindo(a)\n' +
  '\nEscolha uma das opções abaixo:' +
  '\n1. Adicionar dinheiro' +
  '\n2. Remover dinheiro' +
  '\n3. Consultar saldo' +
  '\n4. Sair' 
  )

  switch (opcao) {
    case '1':
      saldo += parseFloat(prompt('Informe o valor a ser adicionado'));
      break
    case '2':
      saldo -= parseFloat(prompt('Informe o valor a ser removido'));
      break
    case '3':
      alert('Saldo total: ' + saldo);
      break
    case '4':
      alert('saindo...');
      break
    default:
      alert('opção invalida');
  }
}while(opcao !== '4')