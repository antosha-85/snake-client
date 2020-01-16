const net = require('net');
const { IP_local, IP_screen, port } = require('./constants');
const connect = function () {
    const conn = net.createConnection({ 
    // host: 'localhost',//   
    host: IP_local,
      port: port
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    conn.on('data', (data) => {
      console.log('Server says just before kicking: ', data);
      });

    conn.on('connect', () => {
        console.log('Successfully connected to game server');
        conn.write("Name: AS8");
    });
    return conn;
  }
// console.log(connect());
module.exports = {connect}