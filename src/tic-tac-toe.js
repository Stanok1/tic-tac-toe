class TicTacToe {
    constructor() {
        this.cps = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.cps;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.cps;
            if (this.cps == 'x') {
                this.cps = 'o';
            } else {
                this.cps = 'x'
            }
        }



    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
