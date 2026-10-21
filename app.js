//Zandile
alert(
    "Welcome to Rock, Paper, Scissors!\n\n" +
    "This game uses pop-up prompts for your choices " +
    "and the browser Console for game messages.\n\n" +
    "To open: right-click on the page, Inspect > Console\n\n"
);

//Luis 
//Make a random computer choice
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

//Collect and validate the player's choice
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Draw!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

//Obadea
//Play rounds until the player or the computer wins three rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;
    const winningScore = 3;

    while (playerScore < winningScore && computerScore < winningScore) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if (result === "Player Wins!") {
            playerScore++;
            console.log(`Round result: ${result} Player ${playerScore} - Computer ${computerScore}`);
        } else if (result === "Computer Wins!") {
            computerScore++;
            console.log(`Round result: ${result} Player ${playerScore} - Computer ${computerScore}`);
        } else {
            console.log(`Round result: ${result} Player ${playerScore} - Computer ${computerScore}`);
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player wins the game! Final score: Player ${playerScore} - Computer ${computerScore}`);
    } else {
        console.log(`Computer wins the game! Final score: Player ${playerScore} - Computer ${computerScore}`);
    }
}

game();
