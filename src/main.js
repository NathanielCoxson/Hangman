function getUserGuess(){
    var guess = document.getElementById("userGuessInput").value;
    if(checkGuess(guess)){
        document.getElementById("demo").innerHTML = "You Win!";
    }
    else{
        document.getElementById("demo").innerHTML = "Try Again";
    }
    var count = 0;
    for(let i = 0; i < guess.length; i++){
        removeCharacter(guess.charAt(i));
    }
    console.log(count);
}

function checkGuess(guess){
    if(guess == "humor"){
        return true;
    }
    else{
        document.getElementById("stickmanImage").src = "./Images/Hangman1.png";
    }
    return false;
}

function removeCharacter(charId){
    document.getElementById(charId).innerHTML = "_";
}

function userKeypress(e){
    console.log(e);
}