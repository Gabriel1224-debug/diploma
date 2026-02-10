const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Registro das Rotas Modulares
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/diplomas', require('./routes/diplomaRoutes'));
app.use('/api/acervo', require('./routes/acervoRoutes'));
app.use('/api/caa', require('./routes/caaRoutes'));

// Redirecionamento inicial
app.get('/', (req, res) => res.redirect('/login'));

app.listen(3000, () => console.log("🚀 Sistema Educacional Rodando na porta 3000"));