// server.js
require('dotenv').config();
const express     = require('express');
const mongoose    = require('mongoose');
const cors        = require('cors');
const path        = require('path');
const itemRoutes  = require('./routes/itemRoutes');

const app  = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// servir uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Erro MongoDB:', err));

// montar rotas
app.use('/api/items', itemRoutes);

// start
app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT}`);
});
