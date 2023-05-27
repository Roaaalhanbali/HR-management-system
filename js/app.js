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

// Method to render employee information in the table
Employee.prototype.render = function (tbody) {
  const row = document.createElement("tr");

  const employeeName = document.createElement("td");
  employeeName.textContent = this.fullName;
  row.appendChild(employeeName);

  const employeeIdElem = document.createElement("td");
  employeeIdElem.textContent = this.employeeId;
  row.appendChild(employeeIdElem);

  const employeeDepartmentElem = document.createElement("td");
  employeeDepartmentElem.textContent = this.department;
  row.appendChild(employeeDepartmentElem);

  const employeeLevelElem = document.createElement("td");
  employeeLevelElem.textContent = this.level;
  row.appendChild(employeeLevelElem);

  const employeeSalary = document.createElement("td");
  employeeSalary.textContent = `$${this.salary}`;
  row.appendChild(employeeSalary);

  tbody.appendChild(row);
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

// Render employee information in the table
function renderEmployees() {
  const employeeTable = document.getElementById("employee-table");
  const tbody = document.createElement("tbody");

  employees.forEach((employee) => {
    employee.render(tbody);
  });

  employeeTable.appendChild(tbody);
}

// Call the renderEmployees function to display employee information on the home page
renderEmployees();
