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




loadChars();
newChar = gameList.slice(-1,1);

let repo = {
    startGame: (character) => {
        gameList.push(character);
        saveChars();
    },
    getChars: () =>{
        console.log("got latest characters");
        return gameList
    },
    newCharacter:() =>{
        console.log(newChar.length)
        return newChar
    },
    getCharByName: (playerName) =>{
        return gameList.find((character)=> {
            return character.playerName === playerName;
        });
    },
    getCharIndex: (playerName) => {
        return gameList.findIndex((character) => {
        return character.playerName === playerName;
        });
    },
    deleteChar: (index) => {
        gameList.splice(index,1);
        console.log("the post has been deleted.");
        saveChars();
    }

};

module.exports = repo;