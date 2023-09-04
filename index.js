import { Zombie } from './zombie.js';
import { Plants } from './plants.js';
//  import { plantsRandom } from './plants.js';

// Tablero y Elementos
var board = document.getElementById('main-board');
var startGame = document.getElementById('start-game');
var resetButton = document.getElementsByClassName('reset')
var gameOver = document.getElementsByClassName('transparencia')[0]
var victory = document.getElementById('victory')
var timerId
var timerPlants
var player
var plant
var plantX
var plantY
var arrPlants = []


/*Evento del Start*/
startGame.addEventListener('click', play)
resetButton = [...resetButton]
resetButton.forEach(elem => elem.addEventListener('click', play))


// Funciones del juego
function play() {
  if (gameOver.getAttribute('class') != 'transparencia display') {
    gameOver.classList.toggle('display')
  }
  if (victory.parentNode.getAttribute('class') != 'transparencia display') {
    victory.parentNode.classList.toggle('display')
  }
  startGame.parentNode.classList.add('display')
  var plantX = Math.floor(Math.random() * 420)
  var plantY = Math.floor(Math.random() * (600 - 40) + 40)
  plant = new Plants(plantX, plantY, board)
  player = new Zombie(200, 770, board)
  timerPlants = setInterval(plantsRandom, 2000);
  player.spawnZombie()
  timerId = setInterval(zombieMovement, 30)
}

function goal() {
  if (player.y <= 30) {
    clearInterval(timerId)
    reset()
    victory.parentNode.classList.toggle('display')
  }
}

function zombieMovement() {
  goal()
  checkCollition()
  if (player.dead) {
    clearInterval(timerId)
    reset()
    gameOver.classList.toggle('display')
  }
  player.move()
}

function checkCollition() {//for para recorrer el array y dar colisiones a todas las plantas
  for (let i = 0; i < arrPlants.length; i++) {
    if (
      arrPlants[i].y + arrPlants[i].height >= player.y &&
      arrPlants[i].y <= player.y + player.height &&
      arrPlants[i].x + arrPlants[i].width >= player.x &&
      arrPlants[i].x <= player.x + player.width
    ) {
      player.dead = true
    }
  }

}

function reset() {//borrar todos las plantas con queryseletionAll
  clearInterval(timerId)
  clearInterval(timerPlants)

  
  for (let i = 0; i < arrPlants.length; i++) {
    if (arrPlants[i].sprite) {
      board.removeChild(arrPlants[i].sprite);
    }
  }
  arrPlants = [];

  board.removeChild(player.sprite)
  // board.removeChild(plant.sprite)
}


// Controles
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'a':
      player.direction = 1
      break;
    case 'd':
      player.direction = -1
      break;
  }
}
)

window.addEventListener('keyup', function () {
  player.direction = 0
})


//generar plantas aleatorias
function plantsRandom() {
  plantX = Math.floor(Math.random() * 420);
  plantY = Math.floor(Math.random() * (600 - 40) + 40);
  for (let i = 0; i < arrPlants.length; i++) {
    var plantaExistente = arrPlants[i];

    if (
      Math.abs(plantaExistente.x - plantX) < 40 &&
      Math.abs(plantaExistente.y - plantY) < 40
    ) {
      var sobrepuesto = true; 
      break;
    }
  }
if (!sobrepuesto) {
    var newPlant = new Plants(plantX, plantY, board);
    newPlant.spawnPlant();
    arrPlants.push(newPlant);
  }
} 

