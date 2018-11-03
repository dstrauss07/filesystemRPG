let attackButton = document.getElementById("attackButton"),
 resultArea = document.getElementById("resultArea"),
 charInputs = document.getElementById("charInputs"),
 playAtk = document.getElementById("playAtk").value;


attackButton.addEventListener("click",function(){
    var playRoll = getRandomNumber(0,12),
    atkNum = parseInt(playAtk,10);
    totalRoll = playRoll + atkNum;
    if (totalRoll<7){
        resultArea.innerHTML = "You roll: " + playRoll + " plus your Attack Skill is " + atkNum + " for a total of: " + totalRoll + "<br> A complete and Utter Failure! The Monster Skeleton attacks you for 3 damage and then laughs as you crawl away bleeding";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 3>"
    }
    if (totalRoll>6 && totalRoll <10){
        resultArea.innerHTML = "You roll: " + playRoll + " plus your Attack Skill is " + atkNum + " for a total of: " + totalRoll + "<br> A Mixed Success! The Monster Skeleton attacks you for 1 damage but you shatter him into a million little bone pieces";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 1>"
    }
    if (totalRoll>9){
        resultArea.innerHTML = "You roll: " + playRoll + " plus your Attack Skill is " + atkNum + " for a total of: " + totalRoll + "<br> A Complete Success! You completely shatter the skeleton before he has a chance to do a thing";
        charInputs.innerHTML += "<input type='hidden' id='hpMin' name='hpMin' value= 0>"
    }
})
