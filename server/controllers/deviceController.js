var express = require('express');
var router = express.Router();
var model = require('./../models/deviceModel');
var data = require('./../data/deviceData');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('Device Controller Reached!');
});

router.post('/', function(req, res){
  new data.deviceData().create(req.body, function(objStatus){
    res.json(objStatus);
  });
});

module.exports = router;