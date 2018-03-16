const short = require("./system/short.js")
console.log(short.encode(1));
console.log(short.encode(26));
console.log(short.encode(27));
console.log(short.encode(51));
console.log(short.encode(52));
console.log(short.encode(53));
console.log(short.encode(54));

console.log( short.decode ( short.encode(1)),1);
console.log( short.decode ( short.encode(26)),26);
console.log( short.decode ( short.encode(27)),27);
console.log( short.decode ( short.encode(51)),51);
console.log( short.decode ( short.encode(52)),52);
console.log( short.decode ( short.encode(53)),53);
console.log( short.decode ( short.encode(54)),54);