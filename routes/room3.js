"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");



router.get('/', function(req, res, next) {
    let character = repo.getCharByName(req.query.playerName);
    res.render('room3', { title: 'room3',
    playerName: character.playerName,
    race: character.race,
    job: character.job,
    gameNum: character.gameNum,
    hp: character.hp,
    atk: character.atk,
    def: character.def,
    luck: character.luck,
    mag: character.mag,
    artifact: character.artifact,
    attack: "Whack them across the face with a newspaper",
    magic: "Cast a spell to make a loud annoying sound",
    trick: "Pull out a spray bottle from your bag",
    monster: "Wild Pack of Demon Dogs",
    action: "terrify",
    actionDesc: "they run away whining like puppies",
    fail: "tear you to shreds like a cheap chew toy",
    ID: repo.getCharIndexName(req.query.playerName)
 });
  });

  router.post("/",(req,res,next)=>{
    let updateChar = {};
   updateChar.gameNum = req.body.gameNum;
   updateChar.playerName = req.body.playerName;
   updateChar.race = req.body.race;
   updateChar.job = req.body.job;
   updateChar.artifact = req.body.artifact;
   updateChar.ID = req.body.ID;
   updateChar.hp=req.body.hp;
   updateChar.atk= req.body.atk;
   updateChar.def= req.body.def;
   updateChar.luck = req.body.luck;
   updateChar.mag = req.body.mag;
   updateChar.hp = req.body.hp - req.body.hpMin;
   if(updateChar.hp<1){
    res.redirect("/dead");
  }else{
    updateChar.stage = "room4";
    repo.updateChar(updateChar.ID, updateChar);
   res.redirect("/room4?playerName=" + updateChar.playerName);}
   });

  module.exports = router;