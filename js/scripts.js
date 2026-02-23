// create gameboard prototype: factory function inside IIFE/module because it is only required once
const Gameboard = (() => {
    const board = ['.','.','.','.','.','.','.','.','.'];
    const winLines = [ 
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // columns
        [0,4,8], [2,4,6]// diagonals
        ];

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join(''));
        }
    };

    const setField = (row, col, player) => {
        board[row][col] = player.mark;
    };

    const isWinningLine = (arr) => {
        return arr.every(field => field[0] !== '' && field === arr[0]) // returns true if a given row/column/diagonal contains all X'es or O's
    };

    const isGameOver = () => {
        const allLines = [];
    };

    const clearBoard = () => {
        board = ['.','.','.','.','.','.','.','.','.'];
    };

    return { getBoard, printBoard, setField, clearBoard, }; // by not returning the variable board, it is kept private
})();

// create player prototype
function createPlayer(name, mark) {
    return { name, mark };
}

// create game controller (factory function)
const GameController = (() => {
    const player1 = createPlayer('you','X');
    const player2 = createPlayer('computer', 'O'); 

    let player1Turn = true;

    const toggleTurn = () => {
        player1Turn = !player1Turn;
    }

    const humanTurn = () => {
        console.log('Current turn:' + player1Turn);
    }

    const isGameOver = (board) => { //returns true if game is over
        console.log('');
    }

    const init = () => {
        while (!isGameOver(board)) {
            humanTurn();
            toggleTurn();
        }
    }

    return { init, };
})();

