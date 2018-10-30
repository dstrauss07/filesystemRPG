"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");


/* GET home page. */
router.get('/', function(req, res, next) {
    let character = repo.getCharByName(req.query.playerName);
    res.render('artifact', { title: 'Express',
    playerName: character.playerName,
    race: character.race,
    job: character.job,
    gameNum: character.gameNum,
    ID: repo.getCharIndexName(req.query.playerName)
 });
  });
  
 // POST receives the data that user enters
 router.post("/",(req,res,next)=>{
     let updateChar = {};
    updateChar.gameNum = req.body.gameNum;
    updateChar.playerName = req.body.playerName;
    updateChar.race = req.body.race;
    updateChar.job = req.body.job;
    updateChar.artifact = req.body.artChooser;
    updateChar.ID = req.body.ID;
    repo.updateChar(updateChar.ID, updateChar);
    res.redirect("/room1?playerName=" + updateChar.playerName);
    });


  module.exports = router;