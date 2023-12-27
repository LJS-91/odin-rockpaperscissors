//logics for rock paper scissors
//manual
console.log ("Type game() and choose the amount of games as a parameter.");


//get random computer input
function getComputerChoice() {
    let decider = Math.random() * 3;
if (decider >= 0 && decider <= 1){
        return "Rock";
    }
    else if (decider > 1 && decider <= 2) {
        return "Paper";
    }
    else if (decider > 2 && decider <= 3) {
        return "Scissors";
    }
    else {
        return "Math.random did not work, pls debug";
    }
} 

//get player input
function getPlayerChoice() {
    let input = prompt("Rock, Paper or Scissors?");
    return input;
}

//variable for wins in global scope
let PlayerWins = 0;
let ComputerWins = 0;

//play 1 round:
function playRound() {
//normalize choices
const PlayerSelection = getPlayerChoice().toLowerCase();
const ComputerSelection = getComputerChoice().toLowerCase();
//compare choices and decide who wins, count wins
if (PlayerSelection == "rock" && ComputerSelection == "paper"){
    ComputerWins++;
    return ("Computer wins: " + ComputerSelection + " beats " + PlayerSelection + ".");
}
else if (PlayerSelection == "rock" && ComputerSelection == "scissors"){
    PlayerWins++;
    return ("Player wins: " + PlayerSelection + " beats " + ComputerSelection + ".");
}
else if (PlayerSelection == "paper" && ComputerSelection == "scissors"){
    ComputerWins++;
    return ("Computer wins: " + ComputerSelection + " beats " + PlayerSelection + ".");
}
else if (PlayerSelection == "paper" && ComputerSelection == "rock"){
    PlayerWins++;
    return ("Player wins: " + PlayerSelection + " beats " + ComputerSelection + ".");
}
else if (PlayerSelection == "scissors" && ComputerSelection == "rock"){
    ComputerWins++;
    return ("Computer wins: " + ComputerSelection + " beats " + PlayerSelection + ".");
}
else if (PlayerSelection == "scissors" && ComputerSelection == "paper"){
    PlayerWins++;
    return ("Player wins: " + PlayerSelection + " beats " + ComputerSelection + ".");
}
else {
    return ("It's a tie. Please try again.");
}
}

//scoreboard
function getWins() {
    console.log ("Total Wins: " + "Player " + PlayerWins + " | " + "Computer " + ComputerWins + ".");
}

//game of multiple sets
function game(sets) {
    for (let i = 0; i < sets; i++){
    alert(playRound());
    }
    getWins();
    // reset wins
    PlayerWins = 0;
    ComputerWins = 0;
}


