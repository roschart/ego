function atacar (a, d) {
  text.text = 'You attack!'
  if (a.AIM > d.EVA && a.ATK > d.DEF) {
    reducir(d, 'BP', a.ATK - d.DEF)
    reducir(a, 'AIM')
  }
}

function curar (personaje) {
  personaje.BP = personaje.BP + personaje.MP
}

function cubrirse (personaje) {
  text.text = 'You get cover!'
  if (personaje.SP > 0) {
    aumentar(personaje, 'EVA', 2)
    reducir(personaje, 'AIM')
    reducir(personaje, 'SP')
  }
}

function apuntar (personaje) {
  text.text = 'You are aiming!'
  if (personaje.MP > 0) {
    aumentar(personaje, 'AIM', 2)
    reducir(personaje, 'EVA')
    reducir(personaje, 'MP')
  }
}

function finDeTurno (personaje) {
  var AUM = 5
  personaje.SP += AUM
  personaje.MP += AUM
  if (personaje.SP > personaje.SPMax) {
    personaje.SP = personaje.SPMax
  }
  if (personaje.MP + AUM <= personaje.MPMax) {
    personaje.MP = personaje.MPMax

  }
}

function reducir (personaje, propiedad, cantidad, minimo) {
  minimo = minimo || 0
  cantidad = cantidad || 1
  personaje[propiedad] -= cantidad
  if (personaje[propiedad] < minimo) {
    personaje[propiedad] = minimo
  }
}

function aumentar (personaje, propiedad, cantidad, maximo) {
  cantidad = cantidad || 1
  personaje[propiedad] += cantidad
  if (maximo) {
    if (personaje[propiedad] > maximo) {
      personaje[propiedad] = maximo
    }
  }
}

/*
mapAccciones = {
  atacaP: function () {
    atacar(host, monstruo)
  },
  cubrirseP: function () {
    cubrirse(host)
  },
  apuntaP: function () {
    apuntar(host)
  },
  curarM: function () {
    curar(monstruo)
  },
}

mapTeclas = {
  97: () => atacar(host, monstruo),  115: () => cubrirse(host),  100: () => apuntar(host),  121: () => curar(host)
}

function pintaEstado (ronda, accion) {
  accion = accion || ''
  console.log(ronda, accion)
  console.log('Host:', host)
  console.log('Monstruo:' , monstruo)
  console.log('--------------------------------------------------------')
  document.getElementById('contenido').innerHTML += JSON.stringify([ronda, accion, host, monstruo])

}

function ejecutarAcciones (accs) {
  var i = 0
  pintaEstado(i, 'Inicio')
  accs.forEach(function (accion) {
    mapAccciones[accion]()
    pintaEstado(++i, accion)
  })
}

acciones = ['atacaP', 'apuntaP', 'apuntaP', 'apuntaP', 'apuntaP', 'apuntaP', 'apuntaP', 'atacaP']
// ejecutarAcciones(acciones)
var i = 0
document.onkeypress = (e) => {
  e = e || window.event
  var action = (mapTeclas[e.keyCode]) || (() => {
      console.log('La tecla siguiente codigo no está mapeado', e.keyCode)
  })
  action()
  pintaEstado(++i)

}
*/
