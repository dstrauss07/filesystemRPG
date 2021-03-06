"use strict";
var express = require('express');
var router = express.Router(),
repo = require("../models/postRepository");

/* GET home page. */
router.get('/', function(req, res, next) {
  let character = repo.getCharByName(req.query.playerName);
  res.render('dead', { title: 'The Hydra',
  playerName: character.playerName,
  playerAvatar: repo.playerAvatar(character) });
});

module.exports = router;

