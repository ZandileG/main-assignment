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