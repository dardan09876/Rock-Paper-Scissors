function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
        let choice;
        while (true) {
            choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
            if (["rock", "paper", "scissors"].includes(choice)) {
                return choice;
            }
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You Win!");
        } else {
            computerScore++;
            console.log("You Lost");
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You Won!");
    } else if (humanScore < computerScore) {
        console.log("You Lose!");
    } else {
        console.log("It's a tie");
    }
}

playGame();
