var express = require('express');
var router = express.Router();
var common = require('../common/common.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: common.constants.siteName });
});

module.exports = router;
