function sendSpaceShip(name:string, capitain:string){
  const spaceship = {
    name,
    capitain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert('a nave ${spaceship.name} comandada pelo capitão ${spaceship.capitain} foi enviada em uma missão')
  return spaceship
}

function accelerate(targetSpeed:number, spaceship:{name:string, speed:number}){
  if(spaceship.speed > targetSpeed) {
    alert('Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}')
  } else if (spaceship.speed < targetSpeed) {
    alert('Aumentado a velocidade da ${spaceship.name} para ${targetSpeed}')
  } else {
    alert('mantendo a velocidade da ${spaceship.name}...')
  }
}

const spaceshipName = prompt('Insira no nome da nave a ser enviada:')
const spaceshipCapitain = prompt('Insira no nome do comandante:')

sendSpaceShip(spaceshipName, spaceshipCapitain)
