setTimeout(function() { console.log('Evento A');}, 4);
setTimeout(function() { console.log('Evento B');}, 0);

process.nextTick(function() {console.log('Tick D'); });
process.nextTick(function() {console.log('Tick E'); });
console.log('Fin del programa principal');