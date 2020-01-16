let connection;
const net = require('net');

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    function handleUserInput (key) {
        if (key === '\u0003') {
            console.log(`pressed ctrc`, key)
            process.exit();
        } else if (key === 'w') {
            conn.write('Move: up')
        } else if (key === 's') {
            conn.write('Move: down')
        } else if (key === 'a') {
            conn.write('Move: left')
        } else if (key === 'd') {
            conn.write('Move: right')
        } else if (key === '1') {
            conn.write('Say: whatsuppp')
        } else if (key === '2') {
            conn.write('Say: shiiiite')
        } else {
            console.log(`pressed a diff button!`);
        }
    }
    return stdin;
}

module.exports = {setupInput};