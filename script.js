function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "paper") {
        return "paper";
    } else if (humanChoice == "scissors") {
        return "scissors"
    } else {
        alert("Enter a valid element!")
    }
}
