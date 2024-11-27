const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/NewchatSupport')
      .then(() => console.log('Conectado ao MongoDB'))
      .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));
  }
  
  module.exports = connectToDatabase;