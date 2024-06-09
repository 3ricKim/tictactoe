let turn = 0;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const grid = document.getElementsByClassName("grid");
let currentPlayer = 'O'

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', () => {
        if (grid[i].textContent === 'X' || grid[i].textContent === 'O') {
            return;
        }
        grid[i].textContent = currentPlayer
        if (checkWin(currentPlayer)) {
            console.log("GAME OVER " + currentPlayer + " wins!");
            return
        }
        if (checkTie(currentPlayer)) {
            console.log("IT'S A TIE");
            return
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    })
}


function checkWin(currentPlayer) {
    for (const combo of winningCombos) {
        const[a,b,c]= combo;
        if(grid[a].textContent === currentPlayer && grid[b].textContent === currentPlayer && grid[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}

function checkTie(currentPlayer) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].textContent === '') {
            return false;
        }
    }
    return true;
}