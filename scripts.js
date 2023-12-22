function getComputerChoice(x) {
    var options = ["Rock", "Paper", "Scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    console.log(choice);
    return choice;
}