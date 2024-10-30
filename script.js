const playerMessage = document.getElementById('playerMessage');
const resetButton = document.getElementById('resetButton');
const cells = document.querySelectorAll('.cell');
let currentPlayer = "X";
let gameState = ["","","","","","","","",""];
let gameActive = true;

function handleCellClicks(event){
    const clickedCell = event.target;
    const clickedCellIndex = Array.from(cells).indexOf(clickedCell);
    if(gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    function checkWinner(){
        return (gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer) ||
        (gameState[3] === currentPlayer && gameState[4] === currentPlayer && gameState[5] === currentPlayer) ||
        (gameState[6] === currentPlayer && gameState[7] === currentPlayer && gameState[8] === currentPlayer) ||

        (gameState[0] === currentPlayer && gameState[3] === currentPlayer && gameState[6] === currentPlayer) ||
        (gameState[1] === currentPlayer && gameState[4] === currentPlayer && gameState[7] === currentPlayer) ||
        (gameState[2] === currentPlayer && gameState[5] === currentPlayer && gameState[8] === currentPlayer) ||

        (gameState[0] === currentPlayer && gameState[4] === currentPlayer && gameState[8] === currentPlayer) ||
        (gameState[2] === currentPlayer && gameState[4] === currentPlayer && gameState[6] === currentPlayer);
    }
    if(checkWinner()){
        playerMessage.textContent = "Player " + currentPlayer + " Wins!";
        gameActive = false;
    }else if(!gameState.includes("")){
        playerMessage.textContent = "It's a draw";
        gameActive = false;
    }else{
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        playerMessage.textContent = "Player " + currentPlayer + "'s Turn";
    }
    function resetGame(){
        gameState = ["","","","","","","","",""];
        gameActive = true;
        currentPlayer = "X";
        playerMessage.textContent = "Player " + currentPlayer + "'s Turn";

        cells.forEach(cell => cell.textContent = "");
    }
    resetButton.addEventListener("click", resetGame);

}

cells.forEach(cell => cell.addEventListener("click", handleCellClicks));