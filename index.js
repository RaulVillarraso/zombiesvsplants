import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

// Random Nums
var plantX = Math.floor(Math.random() * 420)
var plantY = Math.floor(Math.random() * (600 - 40) + 40)

// Tablero y Elementos
var board = document.getElementById('main-board')

var player = new Zombie(200, 770, board)
var plant = new Plants(plantX, plantY, board)

plant.spawnPlant()
player.spawnZombie()

function checkCollition() {
    if (
        plant.y + plant.height >= player.y &&
        plant.y <= player.y + player.height &&
        plant.x + plant.width >= player.x &&
        plant.x <= player.x + player.width
    ) {
        player.dead = true
    }


}

function zombieMovement() {
    meta()
    checkCollition()
    if (player.dead) {
        //alert('Game Over')
        clearInterval(timerId)
        //IMPLEMENTAR SI ESTA MUERTO ----(FALTA ELIMINAR LA PLANTA Y EL ZOMBIE)

        //inicia el juego
        iniciarJuego()
    }
    player.move()
}

// Bucles
var timerId = setInterval(zombieMovement, 30)

var meta = function () {
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
startGame.addEventListener('click', reiniciarTodo)

function reiniciarTodo() {
    // Reiniciar el estado del juego
    player.dead = false;
    // Respawn de la planta y el Zombie
    plantX = Math.floor(Math.random() * 420)
    plantY = Math.floor(Math.random() * (600 - 40) + 40)
    player = new Zombie(200, 770, board)
    plant = new Plants(plantX, plantY, board)

    plant.spawnPlant();
    player.spawnZombie();

    // Reanudar el juego
    //clearInterval(timerId);
    timerId = setInterval(zombieMovement, 30)
    //player.move();

}

function iniciarJuego() {
    if (player.dead === true || player.meta) {//si player.meta no  vale: poner player.y <= 30 --> es lo mismo que meta
        reiniciarTodo();
    }
}