"use strict";
let attackButton = document.getElementById("attackButton"),
    magicButton = document.getElementById("magicButton"),
    trickButton = document.getElementById("trickButton"),
    resultArea = document.getElementById("resultArea"),
    charInputs = document.getElementById("charInputs"),
    playAtk = document.getElementById("playAtk").value,
    playDef = document.getElementById("playDef").value,
    playLuck = document.getElementById("playLuck").value,
    playMag = document.getElementById("playMag").value,
    monster = document.getElementById("monster").value,
    action = document.getElementById("action").value,
    playArt = document.getElementById("playArt").value,
    fail = document.getElementById("fail").value,
    attack = document.getElementById("playAttack").value,
    magic = document.getElementById("playMagic").value,
    trick = document.getElementById("playTrick").value,
    actionDesc = document.getElementById("actionDesc").value,
    buttonArea = document.getElementById("button-area"),
    formArea = document.getElementById("formArea"),
    artifactArea = document.getElementById("artifactArea"),
    diceArea= document.getElementById("dice-area"),
    currentpage= document.getElementById("currentPage").value,
    redirectpage = document.getElementById("redirectPage").value,
    monsterArea = document.getElementById("monsterimage"),
    mDam = 3,
    cDam = 5;
    
 var artifactHide = function(){
     if(playArt === "None"){
        artifactArea.classList.add("d-none");
     }
 }

artifactButton.addEventListener("click", function(){
        buttonArea.classList.add("d-none");
        formArea.classList.remove("d-none");
        artifactArea.classList.add("d-none");
        resultArea.innerHTML = "You use your " + playArt +" and win the day with ease, unfortunately the " + playArt +" instantly disappears.";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
        artifact.value = "None"; })


attackButton.addEventListener("click", function () {
    buttonArea.classList.add("d-none");
    artifactArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(2, 12),
        atkNum = parseInt(playAtk, 10),
        defNum = parseInt(playDef, 10),
        totalRoll = playRoll + atkNum ;
    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        diceArea.innerHTML = "<span class='red'> You roll: </span><img src='images/dice/" + playRoll + ".png'><br> <span class='red bold'>" + playRoll + "</span> + Attack Skill:<span class='blue bold'> " + atkNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='red'>UTTER FAILURE!</span>"; 
        resultArea.innerHTML = "The <span class='red'>" + monster + "</span> attacks you for <span class='red'>" + cDam + " damage </span><br><span class='purple'>" + fail + "</span><br>Your armor absorbs <span class='blue'>" + defNum + " damage</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + currentpage  +"'>"
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        diceArea.innerHTML = "<span class='red'> You roll: </span> <img src='images/dice/" + playRoll + ".png'><br> <span class='red bold'>" + playRoll + "</span> + Attack Skill:<span class='blue bold'> " + atkNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='gold'>Mixed Success</span>"; 
        resultArea.innerHTML = "The <span class='red'> " + monster + "</span> attacks you for <span class='red'>" + mDam + " damage</span>.<br> <span class='green'> You " + attack + " and " + action + " him " + actionDesc + "</span><br> Your armor absorbs <span class='blue'>" + defNum + " damage </span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
    if (totalRoll > 9) {
        diceArea.innerHTML = "<span class='red'> You roll: </span><img src='images/dice/" + playRoll + ".png'><br> <span class='red bold'>" + playRoll + "</span> + Attack Skill:<span class='blue bold'>" + atkNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='blue'>TOTAL SUCCESS!</span>"; 
        resultArea.innerHTML = "<span class='green'>You " + attack + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
})


magicButton.addEventListener("click", function () {
    buttonArea.classList.add("d-none");
    artifactArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(2, 12),
        defNum = parseInt(playDef, 10),
        magNum = parseInt(playMag, 10),
        totalRoll = playRoll + magNum;
    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        diceArea.innerHTML = "<span class='red'> You roll: </span><img src='images/dice/" + playRoll + ".png'><br> <span class='red bold'>" + playRoll + "</span> + Magic Skill:<span class='blue bold'>" + magNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='red'>UTTER FAILURE!</span>"; 
        resultArea.innerHTML = "The <span class='red'>" + monster + "</span> attacks you for <span class='red'>" + cDam + " damage </span><br><span class='purple'>" + fail + "</span><br>Your armor absorbs <span class='blue'>" + defNum + " damage</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + currentpage  +"'>"
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        diceArea.innerHTML = "<span class='red'> You roll: </span><img src='images/dice/" + playRoll + ".png'><br><span class='red bold'>" + playRoll + "</span> + Magic Skill:<span class='blue bold'>" + magNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='gold'>Mixed Success</span>"; 
        resultArea.innerHTML = "The <span class='red'> " + monster + "</span> attacks you for <span class='red'>" + mDam + " damage</span>.<br> <span class='green'> You " + magic + " and " + action + " him " + actionDesc + "</span><br> Your armor absorbs <span class='blue'>" + defNum + " damage </span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
    if (totalRoll > 9) {
        diceArea.innerHTML = "<span class='red'> You roll: </span><img src='images/dice/" + playRoll + ".png'><br> <span class='red bold'>" + playRoll + "</span> + Magic Skill:<span class='blue bold'>" + magNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='blue'>TOTAL SUCCESS!</span>"; 
        resultArea.innerHTML = "<span class='green'>You " + magic + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
})

trickButton.addEventListener("click", function () {
    buttonArea.classList.add("d-none");
    artifactArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(2, 12),
        defNum = parseInt(playDef),
        luckNum = parseInt(playLuck),
        totalRoll = playRoll + luckNum;

    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        diceArea.innerHTML = "<img src='images/dice/" + playRoll + ".png'><br><span class='red bold'>" + playRoll + "</span> + Luck Skill:<span class='blue bold'>"+ luckNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='red'>UTTER FAILURE!</span>"; 
        resultArea.innerHTML = "The <span class='red'>" + monster + "</span> attacks you for <span class='red'>" + cDam + " damage </span><br><span class='purple'>" + fail + "</span><br>Your armor absorbs <span class='blue'>" + defNum + " damage</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + currentpage  +"'>"
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        diceArea.innerHTML = "<span class='red'> You roll: </span> <img src='images/dice/" + playRoll + ".png'><br><span class='red bold'>" + playRoll + "</span> + Luck Skill: <span class='blue bold'>" + luckNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='gold'>Mixed Success</span>"; 
        resultArea.innerHTML = "The <span class='red'> " + monster + "</span> attacks you for <span class='red'>" + mDam + " damage</span>.<br> <span class='green'> You " + trick + " and " + action + " him " + actionDesc + "</span><br> Your armor absorbs <span class='blue'>" + defNum + " damage </span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
    if (totalRoll > 9) {
        diceArea.innerHTML = "<span class='red'> You roll: </span> <img src='images/dice/" + playRoll + ".png'><br><span class='red bold'>" + playRoll + "</span> + Luck Skill: <span class='blue bold'>" + luckNum + "</span><br><span class='green'> Total: " + totalRoll + "</span><br><span class='blue'>TOTAL SUCCESS!</span>"; 
        resultArea.innerHTML = "<span class='green'>You " + trick + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing</span>";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        charInputs.innerHTML += "<input type='hidden' id='finalredirect' name='finalredirect' value='" + redirectpage +"'>"
        monsterArea.classList.add("deadimage");
    }
})


if (document.getElementById("playArt").value ==="none"){
    artifactArea.classList.add("d-none");
}