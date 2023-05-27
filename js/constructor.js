// Constructor function for Employee
function Employee(fullName, level, department, empImage) {
  this.fullName = fullName;
  this.level = level;
  this.department = department;
  this.employeeId = generateEmployeeId();
  this.salaryRange = calculateSalaryRange(this.level);
  this.salary = generateSalary(this.salaryRange.min, this.salaryRange.max);
  this.empImage = empImage;
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

// Method to render employee information in the DOM
Employee.prototype.render = function () {
  document.write(`<div class="employee-box">
    <img src="${this.empImage}" alt="Employee Image">
    <p><strong>Name:</strong> ${this.fullName}</p>
    <p><strong>Department:</strong> ${this.department}</p>
    <p><strong>Salary:</strong> $${this.salary}</p>
  </div>`);
};

// Create objects for each employee
const employees = [
  new Employee("John Doe", "Senior", "Administration", "john.jpg"),
  new Employee("Jane Smith", "Senior", "Finance", "jane.jpg"),
  new Employee("Mike Johnson", "Junior", "Marketing", "mike.jpg"),
];

// Render employee information
employees.forEach((employee) => {
  employee.render();
});
