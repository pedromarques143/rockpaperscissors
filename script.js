let humanScore = 0;
let computerScore = 0;

playGame();

//function declarations
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else if (choice == "scissors") {
        return "scissors";
    } else {
        alert("Wrong gesture!");
        return "invalid"
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice == "invalid") {
        console.log("You lose! Wrong gesture.");
        computerScore++;
    } else if (humanChoice == computerChoice) {
        console.log("Draw!");
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    } else if (computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`You: ${humanScore} Computer: ${computerScore}`);
    }
    console.log(`Final result - You: ${humanScore} Computer: ${computerScore}`)
    if (humanScore == computerScore) {
        console.log("It is a draw!");
    } else if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else {
        console.log("Computer is the winner!");
    }
}

