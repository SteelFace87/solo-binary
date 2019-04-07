const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('letter', data =>{
    const splitData = data.split('');
    console.log(splitData);
    splitData.forEach(letter=>{
        console.log(`RECEIVED: ${letter}`);
    })
   
})

const letters = 'confusing';
ee.emit('letter', letters);

