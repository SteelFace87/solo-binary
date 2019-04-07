const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter{
    constructor(){
        super();//needed to run constructor when extend....
    }
  
    read(str){
        //instead of letters you have str
        str.split('').forEach((letterOfString, i) =>{
            //ee.email you have emit as one of your (this methods)      
          
            const data = 
            {
                letter: letterOfString,
                offset: i
            };
            this.emit('letter', data);
        });  
        this.emit('end');
    }
};


module.exports = LetterEmitter;
