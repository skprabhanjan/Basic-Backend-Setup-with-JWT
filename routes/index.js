var express = require('express');
var router = express.Router();
var auth = require('./auth');

router.post('/authenticate',auth.authenticate);

module.exports = router;
