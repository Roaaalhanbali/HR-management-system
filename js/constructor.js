// Constructor function for Employee
function Employee(fullName, level, department) {
  this.fullName = fullName;
  this.level = level;
  this.department = department;
  this.employeeId = generateEmployeeId();
  this.salaryRange = calculateSalaryRange(this.level);
  this.salary = generateSalary(this.salaryRange.min, this.salaryRange.max);
}

// Generate a unique four-digit employee ID
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Calculate the salary range based on employee level
function calculateSalaryRange(level) {
  switch (level) {
    case "Senior":
      return { min: 1500, max: 2000 };
    case "Mid-Senior":
      return { min: 1000, max: 1500 };
    case "Junior":
      return { min: 500, max: 1000 };
    default:
      return { min: 0, max: 0 };
  }
}

// Generate a random salary within the given range
function generateSalary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Prototype method to render employee information
Employee.prototype.render = function () {
  document.write("<tr>");
  document.write(`<td>${this.fullName}</td>`);
  document.write(`<td>${this.employeeId}</td>`);
  document.write(`<td>${this.department}</td>`);
  document.write(`<td>${this.level}</td>`);
  document.write(`<td>$${this.salary}</td>`);
  document.write("</tr>");
};

// Create instances of Employee
const employees = [
  new Employee("Ghazi Samer", "Senior", "Administration"),
  new Employee("Lana Ali", "Senior", "Finance"),
  new Employee("Tamara Ayoub", "Senior", "Marketing"),
  new Employee("Safi Walid", "Mid-Senior", "Administration"),
  new Employee("Omar Zaid", "Senior", "Development"),
  new Employee("Rana Saleh", "Junior", "Development"),
  new Employee("Hadi Ahmad", "Mid-Senior", "Finance"),
];

// Prototype method to render employee information
function renderEmployees() {
  document.write("<table>");
  document.write("<thead>");
  document.write("<tr>");
  document.write("<th>Employee Name</th>");
  document.write("<th>Employee ID</th>");
  document.write("<th>Department</th>");
  document.write("<th>Level</th>");
  document.write("<th>Salary</th>");
  document.write("</tr>");
  document.write("</thead>");
  document.write("<tbody>");

  employees.forEach(function (employee) {
    employee.render();
  });

  document.write("</tbody>");
  document.write("</table>");
}

// Call the renderEmployees function to display employee information
renderEmployees.prototype.render = function () {
  document.write("<tr>");
  document.write(`<td>${this.fullName}</td>`);
  document.write(`<td>${this.employeeId}</td>`);
  document.write(`<td>${this.department}</td>`);
  document.write(`<td>${this.level}</td>`);
  document.write(`<td>$${this.salary}</td>`);
  document.write("</tr>");
};

// Call the renderEmployees function to display employee information
renderEmployees();
