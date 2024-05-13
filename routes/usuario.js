const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.agregar);
router.get('/', usuarioController.obtener);
router.delete('/:id', usuarioController.eliminar);

module.exports = router;