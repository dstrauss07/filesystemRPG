"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dead', { title: 'You Are Dead!' });
});

module.exports = router;