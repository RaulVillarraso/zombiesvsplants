import { Zombie } from './zombie.js';
import { Plants } from './plants.js';

var musica = new Audio("./music/scary_halloween_ambience_var1.wav")
musica.volume = 0.3
var musicachoque = new Audio("./music/choque.wav")
var musicameta = new Audio("./music/meta.mp3")

// Tablero y Elementos
var board = document.getElementById('main-board');
var startGame = document.getElementById('start-game');
var resetButton = document.getElementsByClassName('reset')
var gameOver = document.getElementsByClassName('transparencia')[0]
var victory = document.getElementById('victory')
var timerId
var timerPlants
var movePlants = []
var player
var plant
var plantX
var plantY
var arrPlants = []


/*Evento del Start y Reset*/
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
  player = new Zombie(200, 740, board)
  player.spawnZombie()
  timerPlants = setInterval(plantsRandom, 1500);
  timerId = setInterval(zombieMovement, 30);

  musica.play()
}

function goal() {
  if (player.y <= 30) {
    musica.pause() 
    reset()
    victory.parentNode.classList.toggle('display')
    musicameta.play()
  }
}

function zombieMovement() {
  goal()
  checkCollition()
  if (player.dead) {
    musicachoque.play()
    musica.pause()
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

function reset() {
  clearInterval(timerId)
  clearInterval(timerPlants)
  movePlants.forEach(elem => clearInterval(elem))  
  
  for (let i = 0; i < arrPlants.length; i++) {
    if (arrPlants[i].sprite) {
      board.removeChild(arrPlants[i].sprite);
    }
  }
  arrPlants = [];

  board.removeChild(player.sprite)
}


// Controles
window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'a':
      player.directionX = 1
      break;
    case 'd':
      player.directionX = -1
      break;
    case 'w':
      player.directionY = 1
      break;
    case 's':
      player.directionY = -1
      break;
      default:
        player.directionX = 0;//si pulsa cualquier tecla se pone en 0
        player.directionY = 0;
  }
}
)

window.addEventListener('keyup', function () {
  player.directionX = 0;
  player.directionY = 0;
})


function plantsRandom() {
  plantX = Math.floor(Math.random() * 420);
  plantY = Math.floor(Math.random() * (600 - 40) + 40);
  for (let i = 0; i < arrPlants.length; i++) {
    var plantaExistente = arrPlants[i];

    if (
      Math.abs(plantaExistente.x - plantX) < 80 &&
      Math.abs(plantaExistente.y - plantY) < 80
    ) {
      var sobrepuesto = true; 
      break;
    }
  }
  if (!sobrepuesto) {
    var newPlant = new Plants(plantX, plantY, board);
    newPlant.spawnPlant();
    var move = Math.floor(Math.random() * 2)
    if (move === 1){
      newPlant.moveType = 'Vertical'
    } else {
      newPlant.moveType = 'Horizontal'
    }
    movePlants.push(setInterval(newPlant.move, 30))
    arrPlants.push(newPlant);
  }
} 