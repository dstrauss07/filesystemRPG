"use strict";
let playHp = parseInt(document.getElementById("playHp").value),
hpcolor = document.getElementById("hpcolor");


if(playHp<4){   
    hpcolor.classList.remove("green");
    hpcolor.classList.add("red");
    hpcolor.classList.add("blinking");
}