/**
 * Establishes connection with the game server
 */

 const net = require('net');

 
 const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}


connect();



module.exports =  connect ;
