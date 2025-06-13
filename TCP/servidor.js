//Primeiro preciso importar a biblioteca do socket
const { Server } = require("socket.io");

//Depois faço os atributos
const PORT = 8000;
const HOST = 'localhost';

//Crio o servidor 
const io = new Server({
    connectionStateRecovery: {}
});

//O cliente se conectou
io.on('connection', (socket) => {
    console.log(`Cliente se conectou: ${socket.id}`);

    //e mandou uma mensagem
    socket.on('mensagem', (msg) => {
        console.log('Mensagem recebida: ', msg);
    });
});

//Inicia tudão
io.listen(PORT);
console.log(`Servidor TCP foi iniciado em http://${HOST}:${PORT}`);