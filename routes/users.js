var router = require('express').Router();

const usersCtrl = require('../controllers/users');

router.post('/new', usersCtrl.createNewUser);
router.get('/', usersCtrl.getAllUsuarios);

module.exports = router;