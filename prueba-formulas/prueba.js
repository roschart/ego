var personaje={
  vida:10,
  ataque:5,
  defensa:3
  }

var monstruo={
  vida:10,
  ataque:5,
  defensa:3
  }

function atacar(a,d){
  d.vida=d.vida-a.ataque+d.defensa
}

function defender(a,d){
  d.vida=d.vida-a.ataque+d.defensa
}





mapAccciones={
  atacaP:function(){
    atacar(personaje,monstruo);
  },
  atacaM:function(){
    atacar(monstruo,personaje)
  }
}


acciones=["atacaP","atacaP","atacaM","atacaM","atacaP","atacaM"];

function pintaEstado(ronda, accion){
  console.log(ronda, accion)
  console.log("Personaje:",personaje)
  console.log("Monstruo:" ,monstruo)
  console.log("--------------------------------------------------------")

}


function ejecutarAcciones(){
  var i=0;
  pintaEstado(i,"Inicio")
  acciones.forEach(function(accion){
    mapAccciones[accion]();
    pintaEstado(++i,accion)

  })
}


ejecutarAcciones();
