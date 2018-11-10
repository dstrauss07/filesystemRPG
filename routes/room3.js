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
    gender: character.gender,
    gameNum: character.gameNum,
    hp: character.hp,
    atk: character.atk,
    def: character.def,
    luck: character.luck,
    mag: character.mag,
    artifact: character.artifact,
    curpage: "room3",
    redirect: "room4",
    attack: "Whack them across the face with a newspaper",
    magic: "Cast a spell to make a loud annoying sound",
    trick: "Pull out a spray bottle from your bag",
    monster: "DemonDogs",
    action: "terrify",
    actionDesc: "they run away whining like puppies",
    fail: "tear you to shreds like a cheap chew toy",
    playerAvatar: repo.playerAvatar(character),
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
    res.redirect("/dead?playerName=" + updateChar.playerName);
  }else{
    updateChar.stage = finalRedirect;
    repo.updateChar(updateChar.ID, updateChar);
    res.redirect("/"+finalRedirect+"?playerName=" + updateChar.playerName);}
   });

  module.exports = router;