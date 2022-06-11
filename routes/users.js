const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');

router.get('/profile',passport.checkAuthentication, userController.Profile);
router.get('/signup',userController.signup);
router.get('/signin',userController.signin);

router.post('/create',userController.create);
router.post('/createsession', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), userController.createsession);

router.get('/signout',userController.destroysession);

module.exports = router;