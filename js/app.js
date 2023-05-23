// Employee Constructor Function
function Employee(fullName, department, level) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.employeeId = generateEmployeeId();
  this.salary = this.generateSalary();
}

// Generate a random salary based on the employee level
Employee.prototype.generateSalary = function () {
  switch (this.level) {
    case "Senior":
      return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    case "Mid-Senior":
      return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    case "Junior":
      return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    default:
      return 0;
  }
};

// Generate a unique four-digit employee ID
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Render employee information in the table
Employee.prototype.render = function () {
  const employeeTable = document.getElementById("employee-table");
  const tbody = employeeTable.querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${this.fullName}</td>
    <td>${this.employeeId}</td>
    <td>${this.department}</td>
    <td>${this.level}</td>
    <td>$${this.salary}</td>
  `;

  tbody.appendChild(row);
};

// Create employee instances
const employees = [
  new Employee("Ahmad Basha", "Administration", "Senior"),
  new Employee("Yara Saddam", "Marketing", "Junior"),
  new Employee("Bahaa Joho", "Development", "Junior"),
  new Employee("Rand Mohanad", "Finance", "Mid-Senior"),
];

// Render employees
employees.forEach((employee) => {
  employee.render();
});
