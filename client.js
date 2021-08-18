/**
 * Establishes connection with the game server
 */

const net = require('net');

 
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    conn.write('Name: LRW');
  });
  conn.setEncoding('utf8'); // interpret incoming data as text

  conn.on('connect', () => {
    console.log("Connection Established");
  })

  

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  return conn;
}






module.exports =  connect ;
