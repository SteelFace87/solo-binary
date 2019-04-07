const LetterEmitter = require('./LetterEmitter');



describe('LetterEmitterTest', () => {
    let letterEmitter;
    beforeEach(() => {
        letterEmitter = new LetterEmitter;
    })
    it('splits a string and emmits an event for each letter', done => {
        const string = 'abc';
        const pattern = /[a/z]/i;
        const letterMockHandler = jest.fn();

        letterEmitter.on('letter', letterMockHandler);

        letterEmitter.once('end', () => {
            expect(letterMockHandler).toHaveBeenCalledTimes(3);

            [...string].forEach((letter, offset) => {
                expect(letterMockHandler).toHaveBeenCalledWith(
                    {
                        letter,
                        offset
                    });
            })
        })
        letterEmitter.read(string);

        done();

    })
})