function Plants(x, y, board) {
  var self = this;
  this.x = x;
  this.y = y;
  this.initialX = x;
  this.initialY = y;
  this.height = 30;
  this.width = 30;
  this.moveType;
  this.direction = this.moveType == "Horizontal" ? "Left" : "Down";
  this.sprite;

  this.spawnPlant = function () {
    var newPlant = document.createElement("div");
    newPlant.classList.add("plants");
    newPlant.style.top = this.y + "px";
    newPlant.style.left = this.x + "px";
    this.sprite = newPlant;
    board.appendChild(this.sprite);
  };

  this.move = function () {
    if (self.moveType === "Horizontal") {
      if (self.direction === "Left") {
        if (self.x <= self.initialX - 60) {
          self.direction = "Right";
        }
        self.x = self.x - 2;
        self.sprite.style.left = self.x + "px";

      } else {
        if (self.x + self.width >= self.initialX + self.width + 60) {
          self.direction = "Left";
        }
        self.x = self.x + 2;
        self.sprite.style.left = self.x + "px";
      }
    } else {
        if (self.direction === "Up") {
            if (self.y <= self.initialY - 60) {
              self.direction = "Down";
            }
            self.y = self.y - 2;
            self.sprite.style.top = self.y + "px";
    
            // if(self.y <= self.initialX - 70){ self.direction = 1}
          } else {
            if (self.y + self.height >= self.initialY + self.height + 60) {
              self.direction = "Up";
            }
            self.y = self.y + 2;
            self.sprite.style.top = self.y + "px";
          }
    }
  };
}

export {Plants};