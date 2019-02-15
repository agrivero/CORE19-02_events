// Importar modulo Later.js:
const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {
	constructor(configuracion) {
	  super();
      
      later.date.localTime();
      
      if (configuracion instanceof Array){
        for (var i=0; i<configuracion.length; i++){
          var e = configuracion[i];
          //hora -> e.hora
          //temperatura -> e.temperaturaIdeal
          //console.log("hora" + e.hora + "temperatura")
          later.setInterval(
          () => 	this.emit('ideal', e.temperatura), 
          later.parse.text('at ' + e.hora)
          );  
      }
      }
}
}

exports = module.exports = Programador;
