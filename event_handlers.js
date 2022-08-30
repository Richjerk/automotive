var events=require('events');
var eventEmitter=new events.eventEmitter();
eventEmitter.once('data_recieved', function(){
console.log('data recieved successfully.');
});
eventEmitter.emit('data_recieved');
eventEmitter.emit('data_recieved');
