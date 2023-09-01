import { Zombie } from './zombie.js'
import { Plants } from './plants.js'

var board = document.getElementById('main-board')

var player = new Zombie(200, 770, board)
player.spawnZombie()

var plant = new Plants(50, 100, player, board)
plant.spawnPlant()
collition()

function movimiento(){
    player.move()
    collition()
}

var timerId = setInterval(movimiento, 15)
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

function collition () {
    if (plant.x < player.x + player.width &&
        plant.x + plant.width > player.x &&
        plant.y < player.y + player.heigth &&
        plant.heigth + plant.y > player.y) 
    {
        //alert("Ha colisioasnado");
        if(alert("Ha colisioasnado" === true)){
            clearInterval(timerId)
            timerId = setInterval(movimiento, 15)
        }

    }
}

window.addEventListener('keyup', function () {
    player.direction = 0
})

