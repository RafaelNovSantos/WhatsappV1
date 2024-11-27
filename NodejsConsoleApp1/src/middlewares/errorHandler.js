module.exports = (err, req, res, next) => {
    console.error(err.stack);

    // Verifica se o erro é uma instância do erro que você criou, ou um erro de validação
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Erro de validação',
            details: err.details, // Se for um erro de validação, você pode enviar detalhes
        });
    }

    // Se o erro for de outro tipo, retorna um erro genérico 500
    if (err.status === 404) {
        return res.status(404).json({
            message: 'Recurso não encontrado',
        });
    }

    // Caso não seja nenhum dos erros acima, um erro genérico 500
    res.status(500).json({ message: 'Erro interno no servidor' });
};
