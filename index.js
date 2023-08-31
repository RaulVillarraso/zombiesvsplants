import { Zombie } from './zombie.js'

var board = document.getElementById('main-board')

var player = new Zombie(200, 770, board)
player.spawnZombie()

var timerId = setInterval(player.move, 300)
console.log(player.sprite.style.top)

window.addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'a':
                if(player.x > 0){
                    player.direction = 1
                    break;  
                } else {
                    player.direction = 0
                    break
                }
                
            case 'd':
                if (player.x < 420){
                    player.direction = -1
                    break; 
                } else {
                    player.direction = 0
                    break
                }
                
        }
    }
)

window.addEventListener('keyup',function(){
    player.direction = 0
})