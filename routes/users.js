var router = require('express').Router();

const usersCtrl = require('../controllers/users');

router.post('/new', usersCtrl.createNewUser);

module.exports = router;