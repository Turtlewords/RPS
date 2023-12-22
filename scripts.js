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
    var result = "";
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = "Tie!";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerWins++;
        result = "You Lose! Paper Beats Rock.";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerWins++;
        result = "You Win. Rock Beats Scissors";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerWins++;
        result = "You Lose. Scissors Beats Paper";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerWins++;
        result = "You Win. Paper Beats Rock!";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerWins++;
        result = "You Lose! Rock Beats Scissors!";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerWins++;
        result = "You Win! Scissors Beats Paper";
        console.log("You chose: " + playerSelection + ". " + "Computer chose: " + computerSelection + ". " + result );
    }
      

}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (playerWins === 3) {
        console.log("You Win!");
    } else if (computerWins === 3) {
        console.log('You Lose!')
    }
}