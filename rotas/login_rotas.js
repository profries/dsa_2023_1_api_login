const express = require('express');
const loginController = require('../controller/login_controller')

const router = express.Router();

//Recurso: /login
router.post('/', loginController.realizarLogin);

module.exports = router;