
const buffer = Buffer.alloc(8, 12);
console.log(buffer);

const buffer2 = Buffer.from('hello!!!');
console.log('buffer from string', buffer2);
console.log('buffer to string', buffer2.toString())

const mappedBuf = buffer.map(()=>74);
console.log('mapped buff', mappedBuf);
console.log('mapped buff to string', mappedBuf.toString())



const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
const cry = Buffer.from ([0xF0, 0x9F, 0x98, 0x82]);


const cryDecimal = cry.readUInt32BE();
const cryBinary = 1111000100111111001100010000010;



console.log('smile', smile);
console.log('smile to string', smile.toString());
console.log('cry', cry);
console.log('cry to string', cry.toString());
console.log('cryDecimal', cryDecimal);



const buf = Buffer.from('hi 😁 there 😁');
console.log('buf', buf);

emojiReplacer(buf, '😁', '😂');
console.log('buff to string%%%%%%%%%%%%%%%%%', buf.toString());


function emojiReplacer(buf, emoji, replaceWithEmoji) {
  const emojiCharCode = Buffer.from(emoji).readUInt32BE();
  const replaceEmojiCharCode = Buffer.from(replaceWithEmoji).readUInt32BE();

  for(let i = 0; i + 3 < buf.length; i++) {
    const potentialEmoji = buf.readUInt32BE(i);
    if(potentialEmoji === emojiCharCode) {
      buf.writeUInt32BE(replaceEmojiCharCode, i);
    }
  }

  return buf;
}

module.exports = emojiReplacer;


