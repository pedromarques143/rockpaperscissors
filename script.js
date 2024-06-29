let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const gameButtons = document.querySelectorAll("button");
const gameComment = document.querySelector("#game-comment");

const humanResult = document.querySelector("#user-result");
const computerResult = document.querySelector("#computer-result");

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
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            gameComment.textContent = "Computer chose Paper. You lose!";
            computerScore++;
            computerResult.textContent = computerScore;
        } else {
            gameComment.textContent = "Computer chose Scissors. You win!";
            humanScore++;
            humanResult.textContent = humanScore;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            gameComment.textContent = "Computer chose Rock. You win!";
            humanScore++;
            humanResult.textContent = humanScore;
        } else {
            gameComment.textContent = "Computer chose Scissors. You lose!";
            computerScore++;
            computerResult.textContent = computerScore;
        }
    } else if (computerChoice == "rock") {
        gameComment.textContent = "Computer chose Rock. You lose!";
        computerScore++;
        computerResult.textContent = computerScore;
    } else {
        gameComment.textContent = "Computer chose Paper. You win!";
        humanScore++;
        humanResult.textContent =  humanScore;
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

    startAgainButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        startAgainContainer.removeChild(startAgainButton);
        humanResult.textContent = humanScore;
        computerResult.textContent = computerScore;
        gameOver = false;
    });
}
//to do:
//change collors depending on winnder