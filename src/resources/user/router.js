const express = require('express');
const {loginController, resistrationController} = require('./controller')

const router = express.Router();

router.route('/signin')
    .get(loginController);

router.route('/signup')
    .get(resistrationController);

module.exports = router;