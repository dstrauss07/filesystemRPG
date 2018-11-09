"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/', function(req, res, next) {
    let character = repo.getCharByName(req.query.playerName);
    res.render('room2', { title: 'room2',
    playerName: character.playerName,
    race: character.race,
    job: character.job,
    gender: character.gender,
    gameNum: character.gameNum,
    hp: character.hp,
    atk: character.atk,
    def: character.def,
    luck: character.luck,
    mag: character.mag,
    artifact: character.artifact,
    attack: "Run across as fast as you can",
    magic: "Cast a levitation spell",
    trick: "Walk slowly by while whistling",
    monster: "Troll",
    action: "confuse",
    actionDesc: "so bad he falls into the abyss",
    fail: "as he flattens you repeatedly with his giant club",
    playerAvatar: repo.playerAvatar(character),
    curpage: "room2",
    redirect: "room3",
    ID: repo.getCharIndexName(req.query.playerName)
 });
  });

  router.post("/",(req,res,next)=>{
    let updateChar = {};
    let  finalRedirect = req.body.finalredirect;
   updateChar.gameNum = req.body.gameNum;
   updateChar.playerName = req.body.playerName;
   updateChar.race = req.body.race;
   updateChar.job = req.body.job;
   updateChar.gender = req.body.gender;
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
  updateChar.stage = finalRedirect;
   repo.updateChar(updateChar.ID, updateChar);
   res.redirect("/"+finalRedirect+"?playerName=" + updateChar.playerName);}
   });

  module.exports = router;