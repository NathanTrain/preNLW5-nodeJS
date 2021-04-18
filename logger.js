const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on('log', (message)=>{
    // * path entende a maquina, pega o diretorio atual (dirname) e o arquivo escolhido (log.txt)
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err=>{
        if (err) throw err
    })
})

function log(message) {
    emitter.emit('log', message);
}

// ! exportando a função para um outro arquivo, fazendo um modulo //
module.exports = log