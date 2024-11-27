const express = require('express');
const User = require('../models/clientModel');
const router = express.Router();

/**
 * @swagger
 * /last-messages:
 *   get:
 *     summary: Obt�m as �ltimas mensagens de um chat espec�fico.
 *     description: Retorna as �ltimas 10 mensagens de um chat no formato mapeado
 *     parameters:
 *       - in: query
 *         name: chatId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da conversa no formato de n�mero de contato (exemplo 5511975208157)
 *     responses:
 *       200:
 *         description: Sucesso Mensagens retornadas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       From:
 *                         type: string
 *                         example: 5511975208157@c.us
 *                       To:
 *                         type: string
 *                         example: 5511975208157@c.us
 *                       MessageId:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 3EB038F32A582F6AFB5217
 *                           fromMe:
 *                             type: boolean
 *                             example: true
 *                       Type:
 *                         type: string
 *                         example: chat
 *                       Content:
 *                         type: string
 *                         example: Test message content
 *                       IsFromMe:
 *                         type: boolean
 *                         example: true
 *                       Timestamp:
 *                         type: integer
 *                         example: 1731961447
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 error:
 *                   type: string
 *                   example: Erro ao buscar mensagens
 */
router.get('/last-messages', async (req, res) => {
    const chatId = req.query.chatId; // ID da conversa (pode ser o n�mero do contato)

    try {
        // Pega o chat com o ID fornecido
        const chat = await client.getChatById(`${chatId}@c.us`);

        // Pega as �ltimas 10 mensagens
        const messages = await chat.fetchMessages({ limit: 10 });

        // Mapeia as mensagens para o formato desejado
        const mappedMessages = messages.map(msg => {
            return {
                From: msg.from,                   // Envia o 'from' para 'From'
                To: msg.to,                       // Envia o 'to' para 'To'
                MessageId: msg.id,                // A ID da mensagem
                Type: msg.type,                   // Tipo de mensagem (ex: texto, imagem, etc.)
                Content: msg.body,                // Corpo da mensagem
                IsFromMe: msg.fromMe,             // Se a mensagem foi enviada pelo usu�rio
                Timestamp: msg.timestamp          // Timestamp da mensagem
            };
        });

        // Responde com as �ltimas mensagens no formato desejado
        res.status(200).json({ status: 'success', messages: mappedMessages });
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});

module.exports = router;
