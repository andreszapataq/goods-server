const express = require('express')
const inventarioController = require('../controllers/inventarioController')

const router = express.Router()

router.get('/', inventarioController.getInventario)

module.exports = router