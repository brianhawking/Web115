// get variables
var BoxElements = Array.from(document.getElementsByClassName("box"));
var gameBoard = document.getElementById("gameBoard");
var isPlayerX = true;
var numberOfBoxesRemaining = 9;

startGame();

function startGame() {
    // add event for when box is clicked
    BoxElements.forEach( box => {
        box.addEventListener('click', clicked, {once: true})
    });
    
    // reset board
    document.getElementById("gameBoard").className = "gameBoard x";
    BoxElements.forEach(box => {
        box.className = "box";
        box.innerHTML = "";
        box.removeEventListener('click', clicked);
        box.addEventListener('click', clicked, {once: true})
    });

    numberOfBoxesRemaining = 9;
    isPlayerX = true;
}

function clicked(e) {
    var box = e.target;

    if (isPlayerX) {
        box.className = "box x";
    }
    else {
        box.className = "box o";
    }
    numberOfBoxesRemaining -= 1;
    checkForWinner();
    checkForDraw();
    switchPlayer();
    
}

function switchPlayer() {
    if (isPlayerX) {
        isPlayerX = false;
        gameBoard.className = "gameBoard o";
    }
    else {
        isPlayerX = true;
        gameBoard.className = "gameBoard x";
    }
}

function checkForDraw() {
    if (numberOfBoxesRemaining == 0) {
        declareWinner("Draw");
    }
}

function checkForWinner() {
    const WinningScenarios = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];

    if (isPlayerX) {
        var className = "box x";
    }
    else {
        var className = "box o";
    }

    var counter = 0;
    WinningScenarios.forEach(scenario => {
        scenario.forEach(location => {
            if (BoxElements[location-1].className == className) {
                counter += 1;
            }
        });

        if (counter == 3) {
            declareWinner("Player ");
            return;
        }
    });

}

function declareWinner(outcome) {
    if (outcome == "Draw") {
        console.log(outcome);
    } 
    else {
        console.log("winner")
    }
}

