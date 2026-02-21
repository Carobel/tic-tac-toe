// create gameboard prototype: factory function inside IIFE/module because it is only required once
const gameboard = (() => {
    const board = [['.','.','.'],['.','.','.'],['.','.','.']];

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join(''));
        }
    };

    const setMark = (row, col, player) => {
        board[row][col] = player.mark;
    };

    const clearBoard = () => {
        board = [['.','.','.'],['.','.','.'],['.','.','.']];
    }
    return { getBoard, printBoard, setMark, clearBoard, }; // by not returning the variable board, it is kept private
})();

// create player prototype
function createPlayer(name, mark) {
    return { name, mark };
}

// create game controller (inside IIFE/module)
const gameController = (() => {
    const player1 = createPlayer('you','X');
    const player2 = createPlayer('computer', 'O'); 

    const TURNS = { player1: true, player2: false};

    currentTurn = true;

    const toggleTurn = (currentTurn) => !currentTurn;

    const playRound = () => {
        console.log({currentTurn});
        toggleTurn(currentTurn); 
    }

    const checkWinner = (board) => {
        console.log('');
    }

    playRound();
    playRound();
})();

