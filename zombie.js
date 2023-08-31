function Zombie(x, y, board) {
    var self = this
    this.x = x
    this.y = y
    this.direction = null
    this.sprite;

    this.spawnZombie = function () {
        var zombie = document.createElement('div')
        zombie.style.top = this.y + 'px'
        zombie.style.left = this.x + 'px'
        zombie.classList.add('zombie')
        board.appendChild(zombie)
        this.sprite = document.getElementsByClassName('zombie')[0]
        console.log(this.sprite)
    }


    this.move = function () {
        self.y = self.y - 10;
        self.sprite.style.top = self.y + 'px'
        self.x = self.x -10 * self.direction
        self.sprite.style.left = self.x + 'px'
    }
}

export {Zombie}