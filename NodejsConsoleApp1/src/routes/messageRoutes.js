const express = require('express');
const router = express.Router();
const client = require('../config/whatsapp'); 
const errorHandler = require('../middlewares/errorHandler'); // Middleware de erro

// Rota para enviar mensagem via WhatsApp
/**
 * @swagger
 * tags:
 *   name: WhatsApp
 *   description: Operações relacionadas a comunicação com a API do WPP
 */

/**
 * @swagger
 * /api/send-message:
 *   post:
 *     tags: [WhatsApp]
 *     summary: Envia uma mensagem para um número de telefone via WhatsApp
 *     description: Recebe um número de telefone e uma mensagem no corpo da requisição e envia a mensagem via WhatsApp Web.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               telefone_number:
 *                 type: string
 *                 description: Número do destinatário (incluindo o código do país, sem o "+" e com 11 dígitos para números brasileiros)
 *               body:
 *                 type: string
 *                 description: Conteúdo da mensagem
 *     responses:
 *       200:
 *         description: Mensagem enviada com sucesso
 *       400:
 *         description: Número de telefone ou corpo da mensagem inválidos
 *       500:
 *         description: Erro interno ao processar a requisição
 */
router.post('/send-message', async (req, res, next) => {
  try {
    const { telefone_number, body } = req.body;

    // Validação dos parâmetros obrigatórios
    if (!telefone_number || !body) {
      return res.status(400).json({ message: 'Número de telefone e corpo da mensagem são obrigatórios.' });
    }

    // Verifica se o número de telefone tem apenas dígitos
    const telefoneNumberPattern = /^[0-9]+$/;
    if (!telefoneNumberPattern.test(telefone_number)) {
      return res.status(400).json({ message: 'Número de telefone inválido.' });
    }

    // Adiciona o sufixo @c.us para o número (para garantir que seja no formato do WhatsApp)
    const formattedNumber = `${telefone_number}@c.us`;

    // Enviar a mensagem
    client.sendMessage(formattedNumber, body)
        .then(response => {
            console.log('Mensagem enviada com sucesso!');
            res.status(200).json({
                status: 'success',
                telefoneNumber: telefone_number,
                messageBody: body,
                message: 'Mensagem enviada com sucesso!'
            });
        })
        .catch(error => {
            console.error('Erro ao enviar mensagem:', error);
            res.status(500).json({ message: 'Erro ao processar a requisição.' });
        });

  } catch (error) {
    // Se algum erro ocorrer, o middleware de erro será chamado
    next(error);
  }
});

// Middleware de erro - Captura erros gerados nas rotas
router.use(errorHandler);

module.exports = router;
