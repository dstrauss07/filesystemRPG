"use strict";
let express = require('express'),
  router = express.Router(),
  repo = require("../models/postRepository");



/* GET room 1 page. */

router.get('/', function (req, res, next) {
  let character = repo.getCharByName(req.query.playerName);
  let stats = repo.playerGen(character);
  res.render('room1', {
    title: 'room1',
    playerName: character.playerName,
    race: character.race,
    job: character.job,
    gender: character.gender,
    gameNum: character.gameNum,
    artifact: character.artifact,
    hp: stats.hp,
    atk: stats.atk,
    def: stats.def,
    luck: stats.luck,
    mag: stats.mag,
    attack: "Attack with a might blow",
    magic: "Use magic to freeze him to the bone",
    trick: "Tell him a hilarious joke",
    monster: "Skeleton",
    action: "shatter",
    actionDesc: "into a million little pieces",
    fail: "and then laughs at you as you crawl away bleeding",
    curpage: "room1",
    redirect: "room2",
    playerAvatar: repo.playerAvatar(character),
    ID: repo.getCharIndexName(req.query.playerName)
  });
});


router.post("/", (req, res, next) => {
  let updateChar = {};
  let  finalRedirect = req.body.finalredirect;
  updateChar.gameNum = req.body.gameNum;
  updateChar.playerName = req.body.playerName;
  updateChar.race = req.body.race;
  updateChar.job = req.body.job;
  updateChar.gender = req.body.gender;
  updateChar.artifact = req.body.artifact;
  updateChar.ID = req.body.ID;
  updateChar.hp = req.body.hp;
  updateChar.atk = req.body.atk;
  updateChar.def = req.body.def;
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