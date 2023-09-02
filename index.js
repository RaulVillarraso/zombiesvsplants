import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

// Tablero y Elementos
var board = document.getElementById('main-board')
var resetButton = document.getElementById('reset')
var gameOver = document.getElementsByClassName('transparencia')[0]
var timerId
var player
var plant

play()

// Start y Reset


function reset(){
    board.removeChild(player.sprite)
    board.removeChild(plant.sprite)
}

resetButton.addEventListener('click', play)

function play(){
    var plantX = Math.floor(Math.random() * 420)
    var plantY = Math.floor(Math.random() * (600 - 40) + 40)
    gameOver.classList.toggle('display')
    player = new Zombie(200, 770, board)
    plant = new Plants(plantX, plantY, board)
    player.spawnZombie()
    plant.spawnPlant()
    timerId = setInterval(zombieMovement, 30)
}

// Movimiento / Derrota / Victoria

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


function goal() {
    if (player.y <= 30) {
        clearInterval(timerId)
        //alert("Victoria")
    }
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

/*Evento del Start y Game Over*/
var startGame = document.getElementById('start-game');
startGame.addEventListener('click', reset)