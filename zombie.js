function Zombie(x, y, board) {
    var self = this;
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.speed = 5;
    this.direction = 0;
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
        self.y = self.y - 2;
        self.sprite.style.top = self.y + 'px';
        var future = self.x - self.speed * self.direction;
        if (future > 0 && future < 420) {
            self.x = self.x - self.speed * self.direction;
            self.sprite.style.left = self.x + 'px';
        }
    }
}
export { Zombie }