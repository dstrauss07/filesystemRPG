"use strict";
let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

// Get- loads the new Game Page
  router.get('/', function(req, res, next) {
  res.render('new', { title: 'The Hydra' });
});

// POST receives the data that user enters
  router.post("/",(req,res,next)=>{
  let character = {};
  character.playerName = req.body.playerName;
  character.race = req.body.raceChooser;
  character.class = req.body.classChooser;
  repo.startGame(character);
  res.redirect("/artifact");
});


module.exports = router;
