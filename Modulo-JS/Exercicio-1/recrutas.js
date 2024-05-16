  now = new Date
  const primeiroNome = prompt("informe o primeiro nome do recruta:")
  const sobreNome = prompt("informe o sobrenome do recruta:")
  const campoDeEstudo = prompt("informe o campo de estudo do recruta:")
  const anoDeNascimento = prompt("informe o ano de nascimento do recruta:")
  alert(
    "Recruta cadastrado com sucesso!\n " + 
    "\nNome Completo: " + primeiroNome + ' ' + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (now.getFullYear() - parseInt(anoDeNascimento))
  )