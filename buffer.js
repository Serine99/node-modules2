/**Buffer
 * Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers. 
 * The Buffer class is a subclass of JavaScript's Uint8Array class and extends it with methods that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.
 * While the Buffer class is available within the global scope, it is still recommended to explicitly reference it via an import or require statement.
 * 
 */
 const { Buffer } = require('buffer');

 // Creates a zero-filled Buffer of length 10.
 const buf1 = Buffer.alloc(10);
 console.log(buf1); //Buffer 00 00 00 00 00 00 00 00 00 00
 // Creates a Buffer of length 10,
 // filled with bytes which all have the value `1`.
 const buf2 = Buffer.alloc(10, 1);
 console.log(buf2); //Buffer 01 01 01 01 01 01 01 01 01 01

 
 // Creates an uninitialized buffer of length 10.
 // This is faster than calling Buffer.alloc() but the returned
 // Buffer instance might contain old data that needs to be
 // overwritten using fill(), write(), or other functions that fill the Buffer's
 // contents.
 const buf3 = Buffer.allocUnsafe(10);
 console.log(buf3); //Buffer 00 00 00 00 00 00 00 00 00 00>

 // Creates a Buffer containing the bytes [1, 2, 3].
 const buf4 = Buffer.from([1, 2, 3]);
 console.log(buf4); // Buffer 01 02 03

 // Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
 // are all truncated using `(value & 255)` to fit into the range 0–255.
 const buf5 = Buffer.from([257, 257.5, -255, '1']);
 console.log(buf5); // <Buffer 01 01 01 01>

 // Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
 // [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
 // [116, 195, 169, 115, 116] (in decimal notation)
 const buf6 = Buffer.from('tést');
 console.log(buf6); // Buffer 74 c3 a9 73 74>

 // Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
 const buf7 = Buffer.from('tést', 'latin1');
 console.log(buf7); //Buffer 74 e9 73 74

 const buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buf);

console.log(uint32array); // Uint32Array(4) [ 1, 2, 3, 4 ]

const buff = Buffer.from('hello', 'utf16le');
const uint16array = new Uint16Array(
  buff.buffer,
  buff.byteOffset,
  buff.length / Uint16Array.BYTES_PER_ELEMENT);

console.log(uint16array); //Uint16Array(5) [ 104, 101, 108, 108, 111 ]
console.log(buff);