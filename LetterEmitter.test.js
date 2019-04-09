const LetterEmitter = require('./LetterEmitter');



describe('LetterEmitterTest', () => 
{
    let letterEmitter;
    beforeEach(() => 
    {
        letterEmitter = new LetterEmitter;
    })
    it('splits a string and emmits an event for each letter', done => 
    {
        const string = 'aBc hello duck';
        const pattern = /[a/z]/i;
        const letterMockHandler = jest.fn();

        letterEmitter.on('letter', letterMockHandler);

        letterEmitter.once('end', () => 
        {
            expect(letterMockHandler).toHaveBeenCalledTimes(12);
            [...string].forEach((letter, offset) => 
            {
                if(pattern.test(letter))
                {
                    expect(letterMockHandler).toHaveBeenCalledWith(
                        {
                            letter,
                            offset
                        });
                }        
            })
        })
        letterEmitter.read(string);

        done();

    })
})lengt