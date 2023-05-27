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

// Method to render employee information in a separate table
Employee.prototype.render = function () {
  return `<div class="employee-box">
    <img src="${this.empImage}" alt="Employee Image">
    <table>
      <tr>
        <th>Full Name</th>
        <th>Employee ID</th>
        <th>Department</th>
        <th>Level</th>
        <th>Salary</th>
      </tr>
      <tr>
        <td>${this.fullName}</td>
        <td>${this.employeeId}</td>
        <td>${this.department}</td>
        <td>${this.level}</td>
        <td>$${this.salary}</td>
      </tr>
    </table>
  </div>`;
};

// Create objects for each employee
const employees = [
  new Employee("Ghazi Samer", "Senior", "Administration", "ghazi.jpg"),
  new Employee("Lana Ali", "Senior", "Finance", "lana.jpg"),
  new Employee("Tamara Ayoub", "Senior", "Marketing", "tamara.jpg"),
  new Employee("Safi Walid", "Mid-Senior", "Administration", "safi.jpg"),
  new Employee("Omar Zaid", "Senior", "Development", "omar.jpg"),
  new Employee("Rana Saleh", "Junior", "Development", "rana.jpg"),
  new Employee("Hadi Ahmad", "Mid-Senior", "Finance", "hadi.jpg"),
];

// Render employee information in separate tables
function renderEmployees() {
  const employeeList = document.getElementById("employee-list");

  employees.forEach((employee) => {
    const employeeContainer = document.createElement("li");
    employeeContainer.innerHTML = employee.render();
    employeeList.appendChild(employeeContainer);
  });
}
