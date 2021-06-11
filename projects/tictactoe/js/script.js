const Elements = document.getElementsByClassName("box");
var gameBoard = document.getElementById("gameBoard");
let turn = "x";
var numberOfBoxesRemaining = 9;

// convert box collection to array
const BoxElements = Array.from(Elements);
BoxElements.forEach( box => {
    box.addEventListener('click', clicked, {once: true})
});

document.getElementById("restart").addEventListener('click', startGame);

function startGame() {
    console.log("restart");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("gameBoard").className = "gameBoard x";
    BoxElements.forEach(box => {
        box.className = "box";
        box.innerHTML = "";
        box.removeEventListener('click', clicked);
        box.addEventListener('click', clicked, {once: true})

    });
    numberOfBoxesRemaining = 9;
    turn = "x";
}

function clicked(e) {
    // place x or o
    const box = e.target;

    if (turn == "x") {
        box.className = "box x";
        checkForWin();
        
        turn = "o";
        gameBoard.className = "gameBoard o";
    }
    else {
        box.className = "box o";
        checkForWin();
        
        turn = "x";
        gameBoard.className = "gameBoard x";
    }

    numberOfBoxesRemaining -= 1;
    checkForDraw();
}

function checkForWin() {
    const winningScenarios = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]
    
    winningScenarios.forEach(scenario => {
        
        var count = 0;
        scenario.forEach(location => {

            className = "box " + turn;
            if (BoxElements[location-1].className == className) {
                count += 1;
            }
            
        });
        console.log(count);
        if (count == 3) {
            declareWinner();
        }
    });


}

function checkForDraw() {
    if (numberOfBoxesRemaining == 0) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        document.getElementById("winner").innerHTML = "Draw";

    }
}

function declareWinner() {
    
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    if (turn == "x") {
        document.getElementById("winner").innerHTML = "X Wins";
    }
    else {
        document.getElementById("winner").innerHTML = "O Wins";

    }
}
    // check for win

    // check for win

    // switch turn

