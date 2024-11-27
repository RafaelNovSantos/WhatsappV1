const express = require('express');
const cors = require('cors');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
const client = new Client();


app.use(cors());

client.on('qr', (qr) => {
    // Gera o QR Code no terminal
    qrcode.generate(qr, { small: true });
    console.log('Escaneie o QR Code acima com o WhatsApp!');
});

client.on('ready', () => {
    console.log('WhatsApp Web está pronto!');
});

client.initialize();


// Endpoint para enviar uma mensagem
app.get('/send-message', (req, res) => {
    const number = req.query.number;
    const message = req.query.message;

    client.sendMessage(`${number}@c.us`, message)
        .then(response => {
            res.status(200).json({ status: 'success', response });
        })
        .catch(err => {
            res.status(500).json({ status: 'error', error: err });
        });
});

// Endpoint para pegar as últimas mensagens de uma conversa
app.get('/last-messages', async (req, res) => {
    const chatId = req.query.chatId; // ID da conversa (pode ser o número do contato)

    try {
        // Pega o chat com o ID fornecido
        const chat = await client.getChatById(`${chatId}@c.us`);

        // Pega as últimas 10 mensagens
        const messages = await chat.fetchMessages({ limit: 10 });

        // Mapeia as mensagens para o formato desejado
        const mappedMessages = messages.map(msg => {
            return {
                From: msg.from,                   // Envia o 'from' para 'From'
                To: msg.to,                       // Envia o 'to' para 'To'
                MessageId: msg.id,                // A ID da mensagem
                Type: msg.type,                   // Tipo de mensagem (ex: texto, imagem, etc.)
                Content: msg.body,                // Corpo da mensagem
                IsFromMe: msg.fromMe,             // Se a mensagem foi enviada pelo usuário
                Timestamp: msg.timestamp          // Timestamp da mensagem
            };
        });

        // Responde com as últimas mensagens no formato desejado
        res.status(200).json({ status: 'success', messages: mappedMessages });
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
