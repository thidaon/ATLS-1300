class TicTacToe {
    constructor() {
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameOver = false;

        this.boardElement = document.getElementById("board");
        this.statusElement = document.getElementById("status");
        this.resetButton = document.getElementById("reset");

        this.createBoard();
        this.resetButton.addEventListener("click", () => this.reset());
        this.updateStatus();
    }

    createBoard() {
        this.boardElement.innerHTML = "";
        this.board.forEach((_, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = index;
            cell.addEventListener("click", () => this.makeMove(index));
            this.boardElement.appendChild(cell);
        });
    }

    makeMove(index) {
        if (this.board[index] || this.gameOver) return;

        this.board[index] = this.currentPlayer;
        this.updateBoardDisplay();

        if (this.checkWinner()) {
            this.statusElement.textContent = `${this.currentPlayer} wins!`;
            this.gameOver = true;
            return;
        }

        if (this.board.every(cell => cell !== "")) {
            this.statusElement.textContent = "It's a draw!";
            this.gameOver = true;
            return;
        }

        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.updateStatus();
    }

    updateBoardDisplay() {
        [...this.boardElement.children].forEach((cell, index) => {
            cell.textContent = this.board[index];
        });
    }

    updateStatus() {
        this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    checkWinner() {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6],
        ];

        return winningCombos.some(([a,b,c]) =>
            this.board[a] &&
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c]
        );
    }

    reset() {
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameOver = false;
        this.createBoard();
        this.updateStatus();
    }
}

new TicTacToe();
