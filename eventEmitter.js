const {EventEmitter} = require('events');

const ee = new EventEmitter();

ee.on('myCoolEvent',()=>{
    console.log('hohohohohohoho');
});

function myCoolEvent(){
    console.log('hohohohohohoh')
}

ee.emit('myCoolEvent');
myCoolEvent();

