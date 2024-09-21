const btn = document.getElementById("play");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const result = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function runGame() {
    let a = getPlayerResult();
    let b = getPlayerResult();
    player1.innerHTML = getNameById(a);
    player2.innerHTML = getNameById(b);

    result.innerHTML = printResult(determineWinner(a, b));
}

function getNameById(id) {
    if (id === 1)
        return "rock";
    else if (id === 2)
        return "paper";
    else
        return "scissors";
}

function determineWinner(a, b) {
    if (a === b)
        return 3; // It's a draw
    else if ((a === 1 && b === 3) || (a === 2 && b === 1) || (a === 3 && b === 2))
        return 1;
    else
        return 2;
}

function printResult(winner) {
    if (winner === 1)
        return "First player won!";
    else if (winner === 2)
        return "Second player won!";
    else
        return "It's a draw!";
}

btn.addEventListener("click", runGame);
