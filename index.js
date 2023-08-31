import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

var board = document.getElementById('main-board')

var player = new Zombie(200, 770, board)
player.spawnZombie()

var plant = new Plants(50, 100, board)
plant.spawnPlant()

var timerId = setInterval(player.move, 15)
console.log(player.sprite.style.top)

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

