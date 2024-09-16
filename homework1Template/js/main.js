const btn = document.getElementById("play");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const result = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function runGame() {
    player1.innerHTML = getPlayerResult();
    player2.innerHTML = getPlayerResult();

    result.innerHTML = "Who is winner?";
}

btn.addEventListener("click", runGame);