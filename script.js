let humanScore = 0;
let computerScore = 0;

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

function getComputerChoice() {
    const random = Math.random();

    if (random < 1 / 3) {
        return "rock";
    } else if (random < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

let choice = prompt("rock, paper, or scissors").toLowerCase();

while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Enter rock, paper, or scissors")
}

return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win!");
    }

    if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lose!");
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win!");
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose!");
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!");
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

