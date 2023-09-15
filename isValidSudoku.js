/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let x = 0; x < 9; x++) {
        let row = new Set();
        let col = new Set();
        let subGrid = new Set();
        for(let y = 0; y<9; y++) {
            let rowCheck = board[x][y];
            let colCheck = board[y][x];

            let xSubGrid = 3 * Math.floor(x / 3) + Math.floor(y / 3);
            let ySubGrid = (3 * (x%3) + (y%3));
            let subGridCheck = board[xSubGrid][ySubGrid];


            if(rowCheck !== ".") {
                if(row.has(rowCheck)) return false;
                row.add(rowCheck)
            }

            if(colCheck !== ".") {
                if(col.has(colCheck)) return false;
                col.add(colCheck)
            }

            if(subGridCheck !== ".") {
                if(subGrid.has(subGridCheck)) return false;
                subGrid.add(subGridCheck)
            }

        }
    }
    return true;
};