function Plants(x, y, board) {
    var self = this
    this.x = x; 
    this.y = y; 
    this.height = 30;
    this.width = 30;
    this.direction = 1
    this.moveType;
    this.sprite;

    this.spawnPlant = function () { 
        var newPlant = document.createElement('div') 
        newPlant.classList.add('plants') 
        newPlant.style.top = this.y + 'px'
        newPlant.style.left = this.x + 'px'
        this.sprite = newPlant
        board.appendChild(this.sprite) 
    }

    this.move = function (){
        if (self.moveType == 0){
            var initial = self.x
            if(self.x >= initial + self.width){self.direction = 1}
            if(self.x <= initial - self.width){self.direction = -1}
            self.x = self.x + 2 * self.direction
            self.sprite.style.left = self.x + 'px';
        }
    }
}

export {Plants};