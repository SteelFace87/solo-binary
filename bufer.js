
//create buffer
const buffer = Buffer.alloc(8, 12);
console.log(buffer);

//create buffer froma string
const buffer2 = Buffer.from('hello!!!');
console.log('buffer from string', buffer2);
console.log('buffer to string', buffer2.toString())

const mappedBuf = buffer.map(item=>item=74);
console.log('mapped buff', mappedBuf);
console.log('mapped buff to string', mappedBuf.toString())

//buf.writeint8(104, 0)
//first number is value to write and 2nd number is location

//create a buffer from an array of hex codes


const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log('smile', smile);
//console.log('smile to string', smile.toString());


//replacer
function emojiReplacer(buf, emoji ,replacewithEmori){

}