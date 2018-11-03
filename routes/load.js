"use strict";
var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('load', { title: 'The Hydra',
characters: repo.getChars() });
});


// router.post("/", (req,res,next) =>{
//   loadStage = req.body.stage;
//   loadChar = req.body.playerName;
//   res.redirect("/" + loadStage +"?" +loadChar);
// });



module.exports = router;
