function Zombie(x, y, board) {
    var self = this;
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.speed = 5;
    this.directionX = 0;
    this.directionY = 0;
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
        var coordX = self.x - self.speed * self.directionX;
        var coordY = self.y - self.speed * self.directionY;
        if (coordX >= 0 && coordX <= 420) {
            self.x = self.x - self.speed * self.directionX;
            self.sprite.style.left = self.x + 'px';

        }

        if (coordY >= 0 && coordY <= 800) {
            self.y = self.y - self.speed * self.directionY;
            self.sprite.style.top = self.y + 'px';
        }
    }
}
export { Zombie }