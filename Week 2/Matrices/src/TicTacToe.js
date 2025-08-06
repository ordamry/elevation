const Matrix = require('./Matrix');

class TicTacToe extends Matrix {
  loadBoard() {
    this.rows = 3;
    this.columns = 3;
    this.matrix = Array.from({ length: 3 }, () => Array(3).fill('.'));
  }

  play(row, col, player) {
    const symbol = player === 1 ? 'x' : 'o';
    this.alter(row, col, symbol);
    this.#checkWinner(symbol, player);
  }

  #checkWinner(symbol, player) {
    for (let col = 0; col < 3; col++) {
      if (
        this.matrix[0][col] === symbol &&
        this.matrix[1][col] === symbol &&
        this.matrix[2][col] === symbol
      ) {
        console.log(`Congratulations Player ${player}`);
      }
    }
  }
}

module.exports = TicTacToe;
