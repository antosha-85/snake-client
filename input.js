const net = require('net');

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    function handleUserInput (key) {
        if (key === '\u0003') {
            console.log(`pressed ctrc`, key)
            process.exit();
        } else {
            console.log(`pressed a diff button!`);
        }
    }
    return stdin;
}

module.exports = {setupInput};