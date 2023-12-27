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

function getPlayerChoice() {
    // no input yet for testing
    return "Rock";
}

function playRound(PlayerSelection, ComputerSelection) {
const PlayerSelection = toLowerCase.getPlayerChoice();
const ComputerSelection = toLowerCase.getComputerChoice();
let PlayerWins = 0;
let ComputerWins = 0;
// tba
}




