const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // Importa o gerador de QR Code

const client = new Client();

// Evento para gerar e exibir o QR Code no terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Evento para quando o WhatsApp Web estiver pronto
client.on('ready', () => {
    console.log('WhatsApp Web está pronto!');
});

// Inicializa o cliente
client.initialize();

// Exporte o cliente para ser usado em outros módulos
module.exports = client;
