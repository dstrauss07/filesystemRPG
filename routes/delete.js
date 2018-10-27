"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/:gameNum',(req,res,next)=>{
    let character = repo.getCharByNum(req.params.gameNum);
    res.render('delete', {
        title: 'The Hydra',
        // playerName: character.playerName,
        // race: character.race,
        // job: character.job,
        gameNum: character.gameNum,
        //id: repo.getCharIndex(req.params.playerName)
    });
});

// router.post("/", (req,res,next) =>{
//     let delChar = {};    
//     delChar.id = req.body.delid;
//     delChar.charName = req.body.delCharName;
//     repo.deleteChar(delChar.id);
//     console.log( delChar.charName + " has been deleted")
//     res.redirect('/');

// });

module.exports = router;
