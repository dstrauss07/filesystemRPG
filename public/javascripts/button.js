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
    actionArea = document.getElementById("action-area"),
    formArea = document.getElementById("formArea"),
    artifactArea = document.getElementById("artifactArea"),
    mDam = 3,
    cDam = 5;
    


artifactButton.addEventListener("click", function(){
        actionArea.classList.add("d-none");
        formArea.classList.remove("d-none");
        resultArea.innerHTML = "You use your " + playArt +" and win the day with ease, unfortunately the " + playArt +" instantly disappears.";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        artifact.value = "none"; })


attackButton.addEventListener("click", function () {
    actionArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(0, 12),
        atkNum = parseInt(playAtk, 10),
        defNum = parseInt(playDef, 10),
        totalRoll = playRoll + atkNum ;

    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Attack Skill: " + atkNum  + " Total: " + totalRoll + "<br> A complete and Utter Failure! <br> The " + monster + " attacks you for " + cDam + " damage " + fail + "<br>Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Attack Skill: " + atkNum + " Total: " + totalRoll + "<br> A Mixed Success! <br>  The " + monster + " attacks you for " + mDam + " damage. You " + attack + " and " + action + " him " + actionDesc + "<br> Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 9) {
        resultArea.innerHTML = "You roll: " + playRoll + " Attack Skill: " + atkNum + " Total: " + totalRoll + "<br> A Complete Success! <br> You " + attack + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
    }
})


magicButton.addEventListener("click", function () {
    actionArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(0, 12),
        defNum = parseInt(playDef, 10),
        magNum = parseInt(playMag, 10),
        totalRoll = playRoll + magNum;
    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + magNum +  " Total: " + totalRoll + "<br> A complete and Utter Failure! <br> The " + monster + " attacks you for " + cDam + " damage " + fail + "<br>Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + magNum +  " Total: " + totalRoll + "<br> A Mixed Success! <br> The " + monster + " attacks you for " + mDam + " damage. You " + magic + " and " + action + " him " + actionDesc + "<br> Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 9) {
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + magNum + " Total: " + totalRoll + "<br> A Complete Success! <br> You " + magic + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
    }
})

trickButton.addEventListener("click", function () {
    actionArea.classList.add("d-none");
    formArea.classList.remove("d-none");
    var playRoll = getRandomNumber(2, 12),
        defNum = parseInt(playDef),
        luckNum = parseInt(playLuck),
        totalRoll = playRoll + luckNum;

    if (totalRoll < 7) {
        let minusValue = cDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + luckNum +  " Total: " + totalRoll + "<br> A complete and Utter Failure! <br> The " + monster + " attacks you for " + cDam + " damage " + fail + "<br>Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 6 && totalRoll < 10) {
        let minusValue = mDam - defNum;
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + luckNum +  " Total: " + totalRoll + "<br> A Mixed Success! <br>  The " + monster + " attacks you for " + mDam + " damage. You " + trick + " and " + action + " him " + actionDesc + "<br> Your armor absorbs " + defNum + " damage";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
        hpMin.value = minusValue;
    }
    if (totalRoll > 9) {
        resultArea.innerHTML = "You roll: " + playRoll + " Magic Skill: " + luckNum +  " Total: " + totalRoll + "<br> A Complete Success! <br> You " + trick + " and " + action + " the " + monster + " " + actionDesc + " before he has a chance to do a thing";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
    }
})


if (document.getElementById("playArt").value ==="none"){
    artifactArea.classList.add("d-none");
}