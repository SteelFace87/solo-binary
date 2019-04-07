const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter 
{
    constructor() 
    {
        super();//needed to run constructor when extend....
    }

    read(str) 
    {
        //instead of letters you have str
        const pattern =/[a-z]/i;
        str.split('').forEach((letterOfString, i) => 
        {
            if(pattern.test(letterOfString))
            {
                const data =
                {
                    letter: letterOfString,
                    offset: i
                };
                this.emit('letter', data);
            }            
        });
        this.emit('end');
    }
};


module.exports = LetterEmitter;
