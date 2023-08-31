function Zombie(x, y){
    this.x = x
    this.y = y
    this.sprite = document.createElement('div')

    this.spawnZombie = function() {
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        this.sprite.classList.add('zombie')
        board.appendChild(this.sprite)
    }    
}

var board = document.getElementById('main-board')

var player = new Zombie(Math.floor(Math.random() * 450), 770)
player.spawnZombie()