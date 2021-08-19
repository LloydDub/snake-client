const net = require('net');
const  connect  = require('./client');
const { setupInput } = require('./input');



console.log('Connecting ...');

connect();



// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   return stdin;
// }
// setupInput()

// const handleUserInput = function() {
//   process.stdin.on('data', (data) => {
//     if (data === '\u0003') {
//       process.exit();
//     }
//   });
// }


// handleUserInput()