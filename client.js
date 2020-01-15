const net = require('net');
const connect = function () {
    const conn = net.createConnection({ 
    host: 'localhost',//   host: '192.168.168.104',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    conn.on('data', (data) => {
      console.log('Server says just before kicking: ', data);
      });
      conn.on('connect', () => {
        console.log('Successfully connected to game server');
        conn.write("Name: AS8")
        });
    return conn;
  }

module.exports = {connect}