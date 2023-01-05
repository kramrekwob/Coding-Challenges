function validSolution(board) {
    //sudoku solution 
    //sanitize input
    //check if rows are all valid

    for (let i = 0; i < 9; i++) {
        //isnert each row into a Set, see if the size is still 8
        let horizontalRow = new Set(board[i]);
        if (horizontalRow.size !== 9) {
            return false;
            console.log(horizontalRow.size + 'horizontal failure')
        }
    };
    //check if all columns are valid
    for (let i = 0; i < 9; i++) {
        //nested loop, check each row if valid
        let verticalRow = new Set();
        for (let j = 0; j < 9; j++) {
            //check if 0, false if 0
            if (board[j][i] == 0) return false;
            //if this row already has this digit false
            if (verticalRow.has(board[j][i])) {
                console.log(`Vertical Failed at ${j} and ${i}`)
                return false;
            }
            else verticalRow.add(board[j][i]);
        }
    };
    //check each of the 9 squares if they are valid
    //first 3 rows go to 3 sets

    let firstSquare = new Set();
    let secondSquare = new Set();
    let thirdSquare = new Set();
    let fourthSquare = new Set();
    let fifthSquare = new Set();
    let sixthSquare = new Set();
    let seventhSquare = new Set();
    let eighthSquare = new Set();
    let ninthSquare = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (j < 3) {
                if (i < 3) firstSquare.add(board[i][j])
                else if (i < 6) fourthSquare.add(board[i][j])
                else seventhSquare.add(board[i][j]);
                } 
                else if (j < 6) {
                    if (i < 3) secondSquare.add(board[i][j])
                    else if (i < 6) fifthSquare.add(board[i][j])
                    else eighthSquare.add(board[i][j])
                }
                else {
                    if (i < 3) thirdSquare.add(board[i][j])
                    else if (i < 6) sixthSquare.add(board[i][j])
                    else ninthSquare.add(board[i][j])

                    }
                }
            }
    if (firstSquare.size !== 9) {
        console.log(Array.from(firstSquare.values()));
        return false;
    }
    if (secondSquare.size !== 9) return false;
    if (thirdSquare.size !== 9) return false;
    if (fourthSquare.size !== 9) return false;
    if (fifthSquare.size !== 9) return false;
    if (sixthSquare.size !== 9) return false;
    if (seventhSquare.size !== 9) return false;
    if (eighthSquare.size !== 9) return false;
    if (ninthSquare.size !== 9) return false;

    return true;
}