function Plants(x, y, board) {
    var self = this;
    this.x = x; // coordenada horizontal
    this.y = y; // coordenada vertical
    this.sprite; // elemento insertado en el DOM

    this.spawnPlant = function () { // función que genera las plantas en el tablero
        var plant = document.createElement('div') // creamos el elemento div en la variable plant
        plant.style.top = this.y + "px" // posicionamos con top como referencia vertical
        plant.style.left = this.x + "px" // posicionamos con left como referencia horizontal
        plant.classList.add('plants') // añadimos la clase para estilar (siempre debe coincidir con el CSS)
        board.appendChild(plant) // introducimos el elemento en el DOM (HTML)
        this.sprite = document.getElementsByClassName('plants')[0] // asociamos el elemento en el DOM a la propiedad Sprite
    }

}
export {Plants}