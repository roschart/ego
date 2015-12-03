var host={
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

function curar(personaje){
  personaje.vida= personaje.vida + personaje.ataque/2
}





mapAccciones={
  atacaP:function(){
    atacar(host,monstruo);
  },
  atacaM:function(){
    atacar(monstruo,host)
  },
  curarH:function(){
    curar(host)
  },
  curarM:function(){
    curar(monstruo)
  }
}



function pintaEstado(ronda, accion){
  console.log(ronda, accion)
  console.log("host:",host)
  console.log("Monstruo:" ,monstruo)
  console.log("--------------------------------------------------------")

}

function ejecutarAcciones(accs){
  var i=0;
  pintaEstado(i,"Inicio")
  accs.forEach(function(accion){
    mapAccciones[accion]();
    pintaEstado(++i,accion)

  })
}


acciones=["atacaP","atacaP","atacaM","curarM","atacaP","curarH"];
ejecutarAcciones(acciones);
