function Plants(x, y, board) {
    this.x = x; 
    this.y = y; 
    this.height = 30;
    this.width = 30;
    this.sprite;

    this.spawnPlant = function () { 
        var newPlant = document.createElement('div') 
        newPlant.classList.add('plants') 
        newPlant.style.top = this.y + 'px'
        newPlant.style.left = this.x + 'px'
        this.sprite = newPlant
        board.appendChild(this.sprite) 
    }

    this.clearPlants = function (){
        const deletePlants = document.querySelector('.plants')
        // board.removeChild(deletePlants) 
        console.log('borrado')
    }
    
}




export {Plants};