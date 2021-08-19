let connection;



const handleUserInput = function(key) {
  
    if (key === '\u0003') {
      process.exit();
    } if (key === '\u0077') {
      connection.write("Move: up")
    } if (key === '\u0061') {
      connection.write("Move: left")
    } if (key === '\u0064') {
      connection.write("Move: right")
    } if (key === '\u0073') {
      connection.write("Move: down")
    }

    if (key === '\u0031') {
      connection.write("Say: Nice, I mean hiss")
    } if (key === '\u0032') {
      connection.write("Say: You got me")
    } if (key === '\u0033') {
      connection.write("Say: Let's Go!")
    }
    
    
  
}



const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');  
  stdin.resume(); 
  stdin.on('data', key => handleUserInput(key));
  return stdin;
}



module.exports = { setupInput }