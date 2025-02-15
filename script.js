let humanScore = 0;
let computerScore = 0;

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

console.log(getHumanChoice());
console.log(getComputerChoice());
