"use strict";

let stats ={
    hp : 1,
    atk : 1,
    def : 1,
    luck : 1,
    mag : 1};

let playGen ={
    playerGen : (character)=>{
    if(character.race === "human"){
          stats.hp =2;
          stats.atk =2;
          stats.def =2;
                      }
      if(character.race==="dwarf"){
          stats.hp=3;
          stats.atk=1;
          stats.def=2;
             }
      if(character.race==="elf"){
          stats.hp=1;
          stats.atk=2;
          stats.def=3;
           }
      if(character.job==="warrior"){
          stats.luck=0;
          stats.mag=0;
          stats.atk=5;
      }
      if(character.job==="mage"){
          stats.luck=0;
          stats.mag=5;
      }
      if(character.job==="thief"){
          stats.luck=5;
          stats.mag=0;
      }
      return stats;
  }
}

module.exports = playGen;
