import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

// Tablero y Elementos
var board = document.getElementById('main-board');
var startGame = document.getElementById('start-game');
var resetButton = document.getElementsByClassName('reset')
var gameOver = document.getElementsByClassName('transparencia')[0]
var victory = document.getElementById('victory')
var timerId
var player
var plant


/*Evento del Start*/
startGame.addEventListener('click', play)
resetButton = [...resetButton]
resetButton.forEach(elem => elem.addEventListener('click', play))


// Funciones del juego
function play(){
    if(gameOver.getAttribute('class') != 'transparencia display'){
        gameOver.classList.toggle('display')
    }
    if(victory.parentNode.getAttribute('class') != 'transparencia display'){
        victory.parentNode.classList.toggle('display')
    }
    startGame.parentNode.classList.add('display')
    var plantX = Math.floor(Math.random() * 420)
    var plantY = Math.floor(Math.random() * (600 - 40) + 40)
    plant = new Plants(plantX, plantY, board)
    player = new Zombie(200, 770, board)
    player.spawnZombie()
    plant.spawnPlant()
    timerId = setInterval(zombieMovement, 30)
}

function goal() {
    if (player.y <= 30) {
        clearInterval(timerId)
        reset()
        victory.parentNode.classList.toggle('display')
    }
}

function zombieMovement(){
    goal()
    checkCollition()
    if(player.dead){
        clearInterval(timerId)
        reset()
        gameOver.classList.toggle('display')
    }
    player.move()
}

function checkCollition(){
    if (
        plant.y + plant.height >= player.y &&
        plant.y <= player.y + player.height &&
        plant.x + plant.width >= player.x &&
        plant.x <= player.x + player.width
        ) {
            player.dead = true
    }
}

function reset(){
    board.removeChild(player.sprite)
    board.removeChild(plant.sprite)
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
