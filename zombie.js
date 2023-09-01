function Zombie(x, y, board) {
    var self = this
    this.x = x
    this.y = y
    this.speed = 1.5
    this.direction = null
    this.sprite;
    this.heigth = 30 //alto del zombie
    this.width = 30 // ancho del zombie

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
        self.y = self.y - self.speed;
        self.sprite.style.top = self.y + 'px'
        var future = self.x - self.speed * self.direction
        if(future > 0 && future < 420){
            self.x = self.x - self.speed * self.direction
            self.sprite.style.left = self.x + 'px'  
        }
        
    }
}

export {Zombie}