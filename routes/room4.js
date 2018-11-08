"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/', function(req, res, next) {
    let character = repo.getCharByName(req.query.playerName);
    res.render('room4', { title: 'room4',
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
    attack: "Stab him with the point of your sword",
    magic: "Hurl a mighty fireball at the beast",
    trick: "Tell the Hydra an Impossible riddle",
    monster: "hydra",
    action: "slay",
    actionDesc: "as 7 of his heads explode",
    fail: "it devours you with a healthy side of Catsup",
    playerAvatar: repo.playerAvatar(character),
    ID: repo.getCharIndexName(req.query.playerName)
 });
  });

  router.post("/",(req,res,next)=>{
    let updateChar = {};
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
  updateChar.stage = "end";
  repo.updateChar(updateChar.ID, updateChar);
   res.redirect("/end");}
   });

  module.exports = router;