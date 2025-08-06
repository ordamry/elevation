const Matrix = require('./Matrix');

class EmployeeMatrix extends Matrix {
  loadData(salaryData) {
    this.rows = salaryData.length;
    this.columns = Object.keys(salaryData[0]).length;
    this.matrix = salaryData.map(obj => Object.values(obj));
  }

  getEmployees(department) {
    return this.matrix
      .filter(row => row[2] === department)
      .map(row => row[1]);
  }

  getTotalSalary(department) {
    return this.matrix
      .filter(row => row[2] === department)
      .reduce((sum, row) => sum + row[3], 0);
  }

  findRichest() {
    let richest = this.matrix[0];
    for (let i = 1; i < this.matrix.length; i++) {
      if (this.matrix[i][3] > richest[3]) {
        richest = this.matrix[i];
      }
    }
    return richest[1];
  }
}

module.exports = EmployeeMatrix;
