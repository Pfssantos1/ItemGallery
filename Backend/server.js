require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 MongoDB conectado com sucesso'))
  .catch(err => console.error('🔴 Erro ao conectar ao MongoDB:', err));
