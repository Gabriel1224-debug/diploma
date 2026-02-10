const express = require('express');
const router = express.Router();
const diplomaController = require('../controllers/diplomaController');

router.post('/emitir', diplomaController.emitir);
router.get('/listar', diplomaController.listar);

module.exports = router;