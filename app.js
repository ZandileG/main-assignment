function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

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
