"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");
//playGen = require("../models/playerGenerator");



/* GET room 1 page. */

router.get('/', function(req, res, next) {
    let character = repo.getCharByName(req.query.playerName);
    let stats = repo.playerGen(character);
    res.render('room1', { title: 'Express',
    playerName: character.playerName,
    race: character.race,
    job: character.job,
    gameNum: character.gameNum,
    hp: stats.hp,
    atk: stats.atk,
    def: stats.def,
    luck: stats.luck,
    mag: stats.mag,
    ID: repo.getCharIndexName(req.query.playerName)
 });
  });

  router.post("/",(req,res,next)=>{
    let updateChar = {};
   updateChar.gameNum = req.body.gameNum;
   updateChar.playerName = req.body.playerName;
   updateChar.race = req.body.race;
   updateChar.job = req.body.job;
   updateChar.artifact = req.body.artChooser;
   updateChar.ID = req.body.ID;
   updateChar.hp=req.body.hp;
   updateChar.atk= req.body.atk;
   updateChar.def= req.body.def;
   updateChar.luck = req.body.luck;
   updateChar.mag = req.body.mag;
   repo.updateChar(updateChar.ID, updateChar);
   res.redirect("/room2?playerName=" + updateChar.playerName);
   });

  module.exports = router;