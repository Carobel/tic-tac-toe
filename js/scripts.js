// create gameboard prototype: factory function inside IIFE/module because it is only required once
const Gameboard = (() => {
    let board = ['','','','','','','','',''];
    
    // these are all the combinations of fields that could lead to a win
    const winLines = [ 
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // columns
        [0,4,8], [2,4,6]// diagonals
        ];
    
    const getBoard = () => board;

    const printBoard = () => {
        for (let i = 0; i <= 6; i+=3) {
            let line = '';
            for (let p = 0; p < 3; p++) {
                let sign = (board[i+p]=='') ? '\xa0\xa0\xa0' : '\xa0'+board[i+p]+'\xa0';
                line += sign;
            }
            console.log(line);
        }
    };
    
    // 
    const setMark = (field, player) => {
        if (board[field] === '') {
            board[field] = player.mark;
            return field;
        }
        return false;
    };

    const isWinningLine = (winLine) => {
        return winLine.every(field => field !== '' && field === winLine[0]) // returns true if a given row/column/diagonal contains all X'es or O's
    };

    const isGameOver = () => {
        const winLineVals = winLines.map(line => {
            return line.map(coord => board[coord]);
        });

        for (const line of winLineVals) {
            if(isWinningLine(line)) {
                return line[0];
            }
        }
        return false;
    };

    const clearBoard = () => {
        board = ['','','','','','','','',''];
    };

    return { getBoard, printBoard, setMark, clearBoard, isGameOver}; // by not returning the variable board, it is kept private
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

