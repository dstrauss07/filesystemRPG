"use strict";
const fs = require('fs'),
    path = require('path'),
    filePath = path.join( __dirname, "data"),
    fileName = path.join(filePath, "gameData.json");

let gameList = [];
let newChar = [];


let loadChars = () => {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("error loading data file: " + err.message);
            throw err;
        }
        else {
            let characterArr = JSON.parse(data);
            if (characterArr.length > 0) {
                gameList = characterArr;
                console.log(gameList.length + " characters loaded");
             }
        }
    });
}

let saveChars = () => {
    fs.writeFile(fileName, JSON.stringify(gameList), (err) => {
        if (err) {
            console.error("error writing the file. " + err.message);
            throw err;
        }
        console.log("the JSON file has been saved.");
    });
};

// TO DO VALIDATE TO MAKE SURE NAME IS NOT ALREADY IN LIST


loadChars();
newChar = gameList.slice(-1,1);

let stats ={
    hp : 1,
    atk : 1,
    def : 1,
    luck : 1,
    mag : 1};

let repo = {
    startGame: (character) => {
        gameList.push(character);
        saveChars();
    },
    getChars: () =>{
        console.log("loaded the characters");
        return gameList
    },
    newCharacter:() =>{
        console.log(newChar.length)
        return newChar
    },
    getCharByNum: (gameNum) =>{
        return gameList.find((character)=> {
        return character.gameNum === gameNum;
        });
    },
    getCharByName: (playerName) =>{
        return gameList.find((character)=> {
        return character.playerName === playerName;
        });
    },
     getCharIndex: (gameNum) => {
        return gameList.findIndex((character) => {
        return character.gameNum === gameNum;
        });
    },
    getCharIndexName: (playerName) => {
        return gameList.findIndex((character) => {
        return character.playerName === playerName;
        });
    },
    deleteChar: (index) => {
        gameList.splice(index,1);
        saveChars();
    },
    updateChar:(index, update) =>{
        gameList[index] = update;
        saveChars();
        console.log("the post has been edited.");
    },
    playerGen : (character)=>{
      if(character.race === "human"){
            stats.hp =9;
            stats.atk =2;
            stats.def =0;
                        }
        if(character.race==="dwarf"){
            stats.hp=5;
            stats.luck=2;
            stats.def=2;
               }
        if(character.race==="elf"){
            stats.hp=7;
            stats.mag=2;
            stats.def=1;
             }
        if(character.job==="warrior"){
            stats.atk=3;
        }
        if(character.job==="mage"){
             stats.mag=3;
        }
        if(character.job==="thief"){
            stats.luck=3;
         }
        return stats;
    }

};

module.exports = repo;