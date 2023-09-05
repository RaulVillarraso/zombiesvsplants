function Zombie(x, y, board) {
    var self = this;
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.speed = 5;
    this.speedY = 2;
    this.direction = 0;
    this.direction2 = 0;
    this.dead = false;
    this.sprite;


    this.spawnZombie = function () {
        this.sprite = document.createElement('div');
        this.sprite.style.top = this.y + 'px';
        this.sprite.style.left = this.x + 'px';
        this.sprite.classList.add('zombie');
        board.appendChild(this.sprite);
    }


    this.move = function () {
        var future = self.x - self.speed * self.direction;
        var nextY = self.y - self.speedY * self.direction2;
        if (future >= 0 && future <= 420) {
            self.x = self.x - self.speed * self.direction;
            self.sprite.style.left = self.x + 'px';
        }
        if(nextY >= 0 && nextY <= 750){
            self.y = self.y - self.speedY * self.direction2;
            self.sprite.style.top = self.y + 'px';
        }
    }
}
export { Zombie }