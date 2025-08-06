const EmployeeMatrix = require('../src/EmployeeMatrix');

const data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
];

let m = new EmployeeMatrix();
m.loadData(data);
m.print();

console.log(m.getEmployees("Finance"));
console.log(m.getEmployees("Design")); 

console.log(m.getTotalSalary("Finance"));
console.log(m.getTotalSalary("Design"));  

console.log(m.findRichest()); 
