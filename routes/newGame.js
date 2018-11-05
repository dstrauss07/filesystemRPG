"use strict";
let express = require('express');
let router = express.Router();
let repo = require('../models/postRepository');

// Get- loads the new Game Page
  router.get('/', function(req, res, next) {
  
  res.render('newGame', { title: 'The Hydra' });
});

// POST receives the data that user enters
  router.post("/",(req,res,next)=>{

  let character = {};
  let arr = repo.getChars();
  character.gameNum = arr.length +1;
  character.playerName = req.body.playerName;
  character.race = req.body.raceChooser;
  character.job = req.body.jobChooser;
  character.artifact = req.body.artChooser;
  character.stage = "room1";
  repo.startGame(character);
  res.redirect("/room1?playerName=" + character.playerName);
  });


module.exports = router;
