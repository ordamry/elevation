class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  hireEmployee(name) {
    const employee = new Employee(name);
    employee.office = this.office;
    this.employees.push(employee);
  }

  askEmployeesToWork() {
    this.employees.forEach((employee) => {
      employee.work(this.office);
    });
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }

  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }

  hireManager(name) {
    const manager = new Manager(name);
    manager.office = this;
    this.managers.push(manager);
  }

  hireCleaner(name) {
    const cleaner = new Cleaner(name);
    cleaner.office = this;
    this.cleaners.push(cleaner);
  }

  startWorkDay() {
    this.managers.forEach((manager) => {
      manager.askEmployeesToWork();
    });
  }
}
