function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Rock, Paper, or Scissors?");
    var computerSelection = getComputerChoice();
    var playerWins = 0;
    var computerWins = 0;
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerWins++;
        return "You Lose! Paper Beats Rock.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win. Rock Beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose. Scissors Beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win. Paper Beats Rock!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock Beats Scissors!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors Beats Paper";
    }
      

}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}