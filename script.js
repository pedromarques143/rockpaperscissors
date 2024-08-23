let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const gameButtons = document.querySelectorAll("button");
const gameComment = document.querySelector("#game-comment");

const humanResult = document.querySelector("#user-result");
const computerResult = document.querySelector("#computer-result");
const gameResults = document.querySelector(".results");

const startAgainContainer = document.querySelector("#start-again-container");


//button events to retrieve user choice
gameButtons[0].addEventListener("click", () => {
    if(!gameOver) {
        playRound("rock");
        endGame();
    }
});

gameButtons[1].addEventListener("click", () => {
    if(!gameOver) {
        playRound("paper");
        endGame();
    }
});

gameButtons[2].addEventListener("click", () => {
    if(!gameOver) {
        playRound("scissors");
        endGame();
    }
});


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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        gameComment.textContent = `Computer chose ${computerChoice}. It's a draw!`;
        gameComment.style.color = "#cc5500";
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerWin("paper");
        } else {
            humanWin("scissors");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanWin("rock");
        } else {
            computerWin("scissors");
        }
    } else if (computerChoice == "rock") {
        computerWin("rock");
    } else {
        humanWin("paper");
    }
}

function endGame() {
    if (humanScore == 5 && computerScore < 5) {
        gameComment.textContent = "You are the winner!";
        gameOver = true;
        startAgain();

    } else if (humanScore < 5 && computerScore == 5) {
        gameComment.textContent = "Computer is the winner!"
        gameOver = true;
        startAgain();
    }
}

function startAgain() {
    const startAgainButton = document.createElement("button");
    startAgainButton.textContent = "Play again";
    startAgainContainer.appendChild(startAgainButton);
    startAgainButton.style.marginTop = "10px";
    startAgainButton.style.borderRadius = "10px";
    startAgainButton.style.borderStyle = "solid";
    startAgainButton.style.borderColor = "indianred";
    startAgainButton.style.boxShadow = "2px 2px 2px 1px #880b0bbf"
    startAgainButton.style.padding = "5px";
    startAgainButton.style.backgroundColor = "#e0c8a7";
    startAgainButton.style.color = "darkred";
    startAgainButton.style.fontFamily = "'Courier New', Courier, monospace"

    startAgainButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        startAgainContainer.removeChild(startAgainButton);
        humanResult.textContent = humanScore;
        computerResult.textContent = computerScore;
        gameOver = false;
        gameComment.textContent = "Press one of the elements to start!";
        gameComment.style.color = "black";
        gameResults.style.color = "#a85100";
    });
}

function humanWin(element) {
    gameComment.textContent = `Computer chose ${element}. You win!`;
    gameComment.style.color = "green";
    humanScore++;
    humanResult.textContent = humanScore;
    if (humanScore > computerScore) {
        gameResults.style.color = "green";
    } else if (computerScore > humanScore) {
        gameResults.style.color = "#8b0000";
    } else {
        gameResults.style.color = "#cc5500";
    }  
}

function computerWin(element) {
    gameComment.textContent = `Computer chose ${element}. You lose!`;
    gameComment.style.color = "#8b0000";
    computerScore++;
    computerResult.textContent = computerScore;
    if (humanScore > computerScore) {
        gameResults.style.color = "green";
    } else if (computerScore > humanScore) {
        gameResults.style.color = "#8b0000";
    } else {
        gameResults.style.color = "#cc5500";
    }  
}
