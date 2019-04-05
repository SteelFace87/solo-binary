const emojiReplacer = require('./bufer');


describe('emoji replacer', ()=>{
    it('takes buffer, target emoji to replace, and emoji',  ()=>{
        const buffer = Buffer.from('hi 😁 there 😁');
        const expectedBuffer = Buffer.from('hi 😂 there 😂')
        const targetEmoji = '😁';
        const replaceWithEmojie = '😂';
        expect(emojiReplacer(buffer, targetEmoji, replaceWithEmojie)).toEqual(expectedBuffer);
        
    })
})