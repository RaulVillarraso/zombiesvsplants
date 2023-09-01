function Plants(x, y, board) {
    var self = this
    this.x = x; // coordenada horizontal
    this.y = y; // coordenada vertical
    this.height = 30;
    this.width = 30;
    this.sprite; // elemento insertado en el DOM

    this.spawnPlant = function () { // función que genera las plantas en el tablero
        this.sprite = document.createElement('div') // creamos el elemento div en la variable plant
        this.sprite.style.top = this.y + 'px'// posicionamos con top como referencia vertical
        this.sprite.style.left = this.x + 'px'// posicionamos con left como referencia horizontal
        this.sprite.classList.add('plants') // añadimos la clase para estilar (siempre debe coincidir con el CSS)
        board.appendChild(this.sprite) // introducimos el elemento en el DOM (HTML)
    }
}
export {Plants}