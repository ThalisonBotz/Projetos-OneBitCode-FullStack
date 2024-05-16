const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} a nave está cheia`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação da nave ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name} já está em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`A nave ${spaceship.name} não possui tripulantes o suficiente para ser enviada na missão`);
    }
    else {
        spaceship.inMission = true;
        alert(`A nave ${spaceship.name} foi enviada para a missão`);
    }
}
function firstMenuOption() {
    const name = prompt('Qual o nome da nave a ser registrada ?'), pilot = prompt('Qual o nome do piloto da nave ?'), crewLimit = Number(prompt('Quanto tripulantes a nave suporta ?')), confirmation = confirm(`Confirma o registro da nave ${name} com o piloto ${pilot} e o limite de tripulantes na nave é ${crewLimit} ?`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const name = prompt('Qual o nome do tripulante ?'), spaceshipName = prompt('Qual o nome da nave que ele será registrado ?'), spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o registro do tripulante ${name} na nave ${spaceship.name} ?`);
        if (confirmation) {
            addCrewMember(name, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual o nome da nave a ser enviada ?'), spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma que a nave ${spaceship.name} vai ser enviada ?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function FourthMenuOption() {
    let list = 'Naves registradas: ';
    spaceships.forEach((spaceship) => {
        list += `
    Nave: ${spaceship.name}
    Piloto: ${spaceship.pilot}
    Status: ${spaceship.inMission}
    Tamanho máximo da tripulação: ${spaceship.crewLimit}
    Tripulantes: ${spaceship.crew.length}`;
        spaceship.crew.forEach(member => {
            list += ` - ${member} `;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = ` PAINEL PRINCIPAL
  1 - Registrar uma nova nave
  2 - Adicionar um membro a tripulação
  3 - Enviar uma nave em uma missão
  4 - Listar naves registradas
  5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            FourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção invalida! Retornando ao painel principal...');
            break;
    }
}
