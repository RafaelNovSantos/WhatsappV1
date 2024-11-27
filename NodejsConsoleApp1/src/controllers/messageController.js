const client = require('../config/whatsapp');

exports.sendMessage = (req, res) => {
    const { telefone_number, body } = req.body;
    if (!telefone_number || !body) {
        return res.status(400).json({ message: 'Número de telefone e corpo da mensagem são obrigatórios.' });
    }

    const formattedNumber = `${telefone_number}@c.us`;
    client.sendMessage(formattedNumber, body)
        .then(response => res.status(200).json({ message: 'Mensagem enviada com sucesso!', response }))
        .catch(error => res.status(500).json({ message: 'Erro ao enviar a mensagem.', error }));
};
