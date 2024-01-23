let board = Array(9).fill(null);
let currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === null) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            alert(`Player ${board[a]} wins!`);
            location.reload();
        }
    }

    if (!board.includes(null)) {
        alert('It\'s a tie!');
        location.reload();
    }
}