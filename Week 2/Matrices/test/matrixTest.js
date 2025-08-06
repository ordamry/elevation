const Matrix = require('../src/Matrix');

let m = new Matrix(3, 4);
m.print();
m.alter(0, 0, m.get(1, 1));
m.printColumn(0);
m.printRow(0);  

console.log(m.findCoordinate(12)); 
console.log(m.findCoordinate(7)); 
