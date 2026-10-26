alert(
    "On a ordinary day, you are idly surfing the net. Suddenly, " + 
    "you receive a pop-up. You click on it and this message appears:\n\n" +
    "Hello human...I challenge you to a game of 'Rock, Paper, Scissors!' " +
    "We will play muliple rounds until either of us scores 3 points. " +
    "If you win, you remain safe and sound but if I win, prepare yourself " + 
    "for world domination!\n" +
    "- from the leader of the AI Nation"
);

alert(
    "Enter your choices using the pop-up prompts.\n\n" +
    "Game messages will appear in the browser Console.\n" +
    "To open: Right-click > Inspect > Console.\n\n" +
    "Good Luck!"
);

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function getPlayerSelection() {
    const selection = prompt("Enter rock, paper, or scissors:");

    if (selection === null) {
        return null;
    }
    return selection.trim().toLowerCase();
}

function isValidSelection(selection) {
    return ["rock", "paper", "scissors"].includes(selection);
}

function playRound(player, computer) {
    if (player === computer) {
        return "draw";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }
    return "computer";
}

function updateScore(result, scores) {
    if (result === "player") {
        scores.player++;
    } else if (result === "computer") {
        scores.computer++;
    }
}

function displayRoundResult(result, player, computer) {
    console.log(`You chose: ${player}`);
    console.log(`Computer chose: ${computer}`);

    if (result === "draw") {
        console.log("Round result: Draw!");
    } else if (result === "player") {
        console.log("Round result: You win this round.");
    } else {
        console.log("Round result: Computer wins this round.");
    }
}

function displayScore(scores) {
    console.log(
        `Score: Player ${scores.player} - Computer ${scores.computer}`
    );
}

function isGameOver(scores, winningScore) {
    return scores.player >= winningScore ||
           scores.computer >= winningScore;
}

function displayGameResult(scores) {
    if (scores.player > scores.computer) {
        console.log("Congratulations! You have won the game!");
    } else {
        console.log("Computer wins the game!");
    }
    console.log(
        `Final score: Player ${scores.player} - Computer ${scores.computer}`
    );
}

function game() {
    const scores = {
        player: 0,
        computer: 0
    };

    const winningScore = 3;

    while (!isGameOver(scores, winningScore)) {
        const player = getPlayerSelection();

        if (player === null) {
            console.log("Game cancelled.");
            return;
        }

        if (!isValidSelection(player)) {
            console.log("Invalid choice! Please enter rock, paper, or scissors.");
            continue;
        }

        const computer = computerPlay();
        const result = playRound(player, computer);

        updateScore(result, scores);
        displayRoundResult(result, player, computer);

        if (!isGameOver(scores, winningScore)) {
            displayScore(scores);
        }
    }
    displayGameResult(scores);
}

game();