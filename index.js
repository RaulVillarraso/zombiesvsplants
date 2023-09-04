import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

/*musica */

var musica = new Audio("./scary_halloween_ambience_var1.wav")
var musicachoque = new Audio("./choque.wav")
var musicameta = new Audio("./meta.mp3")

musica.volume = 0.3




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
    player = new Zombie(200, 750, board)
    player.spawnZombie()
    plant.spawnPlant()
    timerId = setInterval(zombieMovement, 30)
    musica.play()

}

function goal() {
    if (player.y <= 30) {
        clearInterval(timerId)
        musica.pause()   // aquí pausamos cuando llega a meta
        reset()
        victory.parentNode.classList.toggle('display')
        musicameta.play()
    }
}

function zombieMovement(){
    goal()
    checkCollition()
    if(player.dead){
        musicachoque.play() // colision musicade choque
        clearInterval(timerId)
        musica.pause() // musica pausada
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
            musica.pause()
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