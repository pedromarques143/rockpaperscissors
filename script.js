function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "Rock";
    } else if (computerChoice == 1) {
        computerChoice = "Paper";
    } else if (computerChoice == 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice())


function getHumanChoice() {

}