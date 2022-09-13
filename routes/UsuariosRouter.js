// Importando o express
const express = require('express');

// Criando o roteador
const router = express.Router();

// Importando o Controller que lida com os usuarios
const UsuariosController = require('../controllers/UsuariosController');

// Criando rota que encaminha requisição para o UsuariosController.index
router.get('/', UsuariosController.index)

// Exportando o roteador
module.exports = router;