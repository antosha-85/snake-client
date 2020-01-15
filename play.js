const net = require('net');

const {connect} = require('./client')
console.log('Connecting ...');
connect();

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
// const handleUserInput = function (key) {
//     if (key === '\u0003') {
//         process.exit();
//     } 
//     console.log(`pressed a diff button!`);
// }
setupInput();