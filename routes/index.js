const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/users',require("./users"));
router.use('/movies',require("./movies"));

module.exports = router;