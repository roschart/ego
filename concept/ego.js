var game = new Phaser.Game(600, 800, Phaser.AUTO, '', {preload: preload, create: create, update: update})
var host = {
  BP: 10,
  BPMax: 20,
  SP: 5,
  SPMax: 10,
  MP: 5,
  MPMax: 10,
  ATK: 5,
  DEF: 3,
  AIM: 10,
  EVA: 2
}

var monstruo = {
  BP: 10,
  BPMax: 10,
  SP: 5,
  SPMax: 10,
  MP: 5,
  MPMax: 10,
  ATK: 5,
  DEF: 3,
  AIM: 5,
  EVA: 5
}

var text
var counter = 0

function preload () {
  // game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml')
  game.load.image('bg', 'asets/frame.png')
  game.load.image('forest', 'asets/bg1.png')
  game.load.image('red', 'asets/char2.png')
  game.load.image('blue', 'asets/char1.png')
  game.load.image('atkbut', 'asets/attack.png')
  game.load.image('aimbut', 'asets/aim.png')
  game.load.image('covbut', 'asets/cover.png')
}

function create () {
  // Dibujo del fondo y el entorno
  game.add.sprite(0, 0, 'bg')
  game.add.sprite(0, 0, 'forest')
  // Dibujo de los personajes y botones
  game.add.sprite(48, 48, 'blue')
  game.add.sprite(336, 48, 'red')
  // Escribir los parametros

  // Dibujar botones y asignarlos como variables
  var atkbtn = game.add.sprite(0, 288, 'atkbut')
  var aimbtn = game.add.sprite(144, 288, 'aimbut')
  var covbtn = game.add.sprite(288, 288, 'covbut')
  // Permitir la interaccion de los botones con un click
  atkbtn.inputEnabled = true
  aimbtn.inputEnabled = true
  covbtn.inputEnabled = true

  text = game.add.text(250, 16, '', { fill: '#ffffff' })
  atkbtn.events.onInputDown.add(atuco, this)
  aimbtn.events.onInputDown.add(aputo, this)
  covbtn.events.onInputDown.add(covuto, this)

}

function update () {
}

function atuco () {
  text.text = 'You attack!'
}

function aputo () {
  text.text = 'You aim!'
}

function covuto () {
  text.text = 'You cover!'
}
