import { Zombie } from "./zombie.js";
import { Plants } from "./plants.js";

// Tablero y Elementos

var board = document.getElementById("main-board");

var player = new Zombie(200, 740, board); //aparece en w:200 y h:740 para dar espacio al borde
var plantas = [];
var timerIdJugador;
var timerPlant;

function createPlants() {
  var limitePlantas = 0; // limite de intentos
  var conseguido = false; // se usa para saber si hemos añadido con exito la planta
  while (!conseguido && limitePlantas < 20) {
    var plantX = Math.floor(Math.random() * 420);
    var plantY = Math.floor(Math.random() * (480 - 40) + 40);
    var sobrepuesto = false; // asumimos que no hay superposición

    //revisamos todas las plantas
    for (let i = 0; i < plantas.length; i++) {
      var plantaExistente = plantas[i];

      if (
        Math.abs(plantaExistente.x - plantX) < 40 &&
        Math.abs(plantaExistente.y - plantY) < 40
      ) {
        sobrepuesto = true; // Hay superposición
        break;
      }
    }
    // si no hay superposición, creamos y añadimos la nueva planta
    if (!sobrepuesto) {
      var newPlant = new Plants(plantX, plantY, board);
      newPlant.spawnPlant();
      plantas.push(newPlant);
      conseguido = true; //  se añadio correctamente
    }
    limitePlantas++; // se incrementa el numero de intentos
  }
}

function play() {
  timerIdJugador = setInterval(zombieMovement, 120); // velocidad al zombie
  //creamos las plantas
  createPlants();
  timerPlant = setInterval(createPlants, 2000);
  player.spawnZombie(); //aparezca zombie
}

function reset() {
  //hacer if para ver si existen o no existen antes de borrarlos
  board.removeChild(plantas.sprite);
  board.removeChild(player.sprite);

  // si no estan se borran del array del plantas = []
  play();
}

function checkCollition() {
    for(let i=0; i<plantas.length;i++){
  if (
    plantas[i].y + plantas[i].height >= player.y &&
    plantas[i].y <= player.y + player.height &&
    plantas[i].x + plantas[i].width >= player.x &&
    plantas[i].x <= player.x + player.width
  ) {
    player.dead = true;
    break
  }
}
}

function zombieMovement() {
  goal();
  checkCollition();
  if (player.dead) {
    alert("Game Over");
    clearInterval(timerIdJugador);
    //reset()
  }

  player.move();
}

//cuando llegue a la meta el jugador se queda quieto y saldra mensaje de "Victoria"
var goal = function () {
  if (player.y <= 30) {
    clearInterval(timerIdJugador);
    //alert("Victoria")
  }
};

// Controles direccion de movimiento
window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "a":
      player.direction = 1;
      break;
    case "d":
      player.direction = -1;
      break;
  }
});

//evita que se siga ejecutando cuando se presione otra tecla, termine su ejecución cuando se levanta la tecla
window.addEventListener("keyup", function () {
  player.direction = 0;
});

play();
