const express = require('express');
const router = express.Router();

// Rota temporária para teste
router.get('/', (req, res) => {
    res.send('Módulo em desenvolvimento');
});

module.exports = router;