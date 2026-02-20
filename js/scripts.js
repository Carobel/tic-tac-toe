// factory function inside IIFE because it is only required once
const gameboard = (() => {
    const board = [['.','.','.'],['.','.','.'],['.','.','.']];

    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i < board.length; i++) {
            console.log(board[i].join(''));
        }
    };

    const addMark = (row, col, mark) => {
        board[row][col] = mark;
    };

    const clearBoard = () => {
        board = [['.','.','.'],['.','.','.'],['.','.','.']];
    }
    return { getBoard, printBoard, addMark, clearBoard, }; // by not returning the variable board, it is kept private
})();

// create player 
function createPlayer(name, mark) {
    return { name, mark };
}

// tests
player1 = createPlayer('you','X');
player2 = createPlayer('computer', 'O'); 