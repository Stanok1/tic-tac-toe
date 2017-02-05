class TicTacToe {
    constructor() {

        this.winner = null;
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
      if (this.getWinner() != null || this.isDraw() == true){
        return true;
      }else {
        return false;
      }

    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2]) {
                this.winner = this.field[i][0];
            }

            if (this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i]) {
                this.winner = this.field[0][i];
            }
        }

        if (this.field[2][0] == this.field[1][1] && this.field[2][0] == this.field[0][2]) {
            this.winner = this.field[2][0];
        }
        if (this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) {
            this.winner = this.field[0][0];
        }
        return this.winner;
    }

    noMoreTurns() { //true if game field is full
      this.nmt = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] == null) {
                    this.nmt++;
                }
            }
        }
              if (this.nmt == 0){
                  return true;
                }else {
                  return false;
                }
    }

    isDraw() {
        if (this.noMoreTurns() == false || this.getWinner() != null) {

            return false;
        } else {
            return true;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
