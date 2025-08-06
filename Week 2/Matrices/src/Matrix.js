class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = [];
    this.generateMatrix();
  }

  generateMatrix() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.columns; j++) {
        row.push(counter++);
      }
      this.matrix.push(row);
    }
  }

  print() {
    this.matrix.forEach(row => {
      console.log(row.join('\t'));
    });
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  alter(row, col, val) {
    this.matrix[row][col] = val;
  }

  printRow(row) {
    this.matrix[row].forEach(val => console.log(val));
  }

  printColumn(col) {
    this.matrix.forEach(row => console.log(row[col]));
  }

  findCoordinate(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.matrix[i][j] === value) {
          return { x: j, y: i };
        }
      }
    }
    return null;
  }
}

module.exports = Matrix;
