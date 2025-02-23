let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));


document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.margin = "50px";

document.getElementById("buttons").style.margin = "20px";

document.querySelectorAll("button").forEach(button => {
    button.style.margin = "5px";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#3498db";
    button.style.color = "white";
    button.style.transition = "background-color 0.3s";
    button.addEventListener("mouseover", () => button.style.backgroundColor = "#2980b9");
    button.addEventListener("mouseout", () => button.style.backgroundColor = "#3498db");
});

resultDiv.style.marginTop = "20px";
resultDiv.style.fontSize = "18px";
resultDiv.style.fontWeight = "bold";

scoreDiv.style.marginTop = "20px";
scoreDiv.style.fontSize = "18px";
scoreDiv.style.fontWeight = "bold";

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    
    const computerChoice = getComputerChoice();
    let result = "";
    
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = "You Win!";
    } else {
        computerScore++;
        result = "You Lost!";
    }
    
    resultDiv.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice} | ${result}`;
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    
    if (humanScore === 5) {
        resultDiv.textContent += " Congratulations, you won the game!";
    } else if (computerScore === 5) {
        resultDiv.textContent += " Sorry, you lost the game.";
    }
}