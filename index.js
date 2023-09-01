import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

// Random Nums
var plantX = Math.floor(Math.random() * 420)
var plantY = Math.floor(Math.random() * (600 - 40) + 40)

// Tablero y Elementos
var board = document.getElementById('main-board')

var player = new Zombie(200, 770, board)
player.spawnZombie()

var plant = new Plants(plantX, plantY, board)
plant.spawnPlant()


// Bucles
var timerId = setInterval(player.move, 30)


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

