var events=require('events');
var eventEmitter=new events.eventEmitter();
var emitter=new eventEmitter();

emitter.on('data_recieved', function() {});
emitter.on('data_recieved', function() {});

console.log(eventEmitter.listenerCount(emitter, "data_recieved"));