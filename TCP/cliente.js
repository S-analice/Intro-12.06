//Primeiro preciso importar a biblioteca do socket cliente e onde irei solicitar dados
const { io } = require("socket.io-client");
const readline = require('readline')

//Depois faço os atributos
const PORT = 8000;
const HOST = 'localhost';
const url = `http://${HOST}:${PORT}`;

//Cria a interface de entrar dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Crio a conexão com o servidor
console.log('Conectando você ao servidor...')
const socket = io(url);

//O cliente se conectou
socket.on('connect', () => {
    console.log('Conectado!');

    //Pede a mensagem 
    rl.question('Digite a mensagem para enviar ao servidor: ', (mensagem) => {
        
        //Envia a mensagem ao servidor
        socket.emit('mensagem', mensagem);
        console.log(`Mensagem enviada: ${mensagem}`)
        
        rl.close();
    });
});

