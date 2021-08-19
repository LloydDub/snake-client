/**
 * Establishes connection with the game server
 */
 
//  setInterval(function() { callback( "  params"); }, 50); 



const net = require('net');

 
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); // interpret incoming data as text

 
 conn.on('connect', () => {
    console.log("Connection Established");
    conn.write('Name: LRW');    
    // setInterval(function() {
    //   conn.write("Move: up");
    // }, 50)
  })
  
  
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  return conn;
}



// conn.on('connect', () =>{
//   conn.write('Move: up')
// })


module.exports =  { connect };
