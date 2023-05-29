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
  return Math.floor(1000 + Math.random() * 100);
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

// Method to render employee information in a separate card
Employee.prototype.render = function () {
  return `<div class="card">
    <img src="${this.empImage}" alt="Employee Image">
    <div class="card-details">
      <h2>${this.fullName}</h2>
      <p>Employee ID: ${this.employeeId}</p>
      <p>Department: ${this.department}</p>
      <p>Level: ${this.level}</p>
      <p>Salary: $${this.salary}</p>
    </div>
  </div>`;
};

// Create objects for each employee
const employees = [
  new Employee("Ghazi Samer", "Senior", "Administration", "https://cdn-icons-png.flaticon.com/512/1870/1870038.png"),
  new Employee("Lana Ali", "Senior", "Finance", "https://cdn-icons-png.flaticon.com/512/4974/4974985.png"),
  new Employee("Tamara Ayoub", "Senior", "Marketing", "https://cdn-icons-png.flaticon.com/512/554/554857.png"),
  new Employee("Safi Walid", "Mid-Senior", "Administration", "https://cdn-icons-png.flaticon.com/512/123/123417.png"),
  new Employee("Omar Zaid", "Senior", "Development", "https://cdn-icons-png.flaticon.com/512/4341/4341874.png"),
  new Employee("Rana Saleh", "Junior", "Development", " https://cdn-icons-png.flaticon.com/512/2830/2830637.png"),
  new Employee("Hadi Ahmad", "Mid-Senior", "Finance", "https://cdn-icons-png.flaticon.com/512/5351/5351547.png"),
];

// Render employee information in separate cards
function renderEmployees() {
  const employeeList = document.getElementById("employee-list");

  employees.forEach((employee) => {
    const employeeContainer = document.createElement("li");
    employeeContainer.innerHTML = employee.render();
    employeeList.appendChild(employeeContainer);
  });
}
// ...

// Render employee information in separate cards
function renderEmployees() {
  const employeeList = document.getElementById("employee-list");

  // Group employees by department
  const departments = {};
  employees.forEach((employee) => {
    if (!departments[employee.department]) {
      departments[employee.department] = [];
    }
    departments[employee.department].push(employee);
  });

  // Render department sections
  for (const department in departments) {
    const departmentSection = document.createElement("section");
    departmentSection.className = "department-section";

    const departmentHeader = document.createElement("h2");
    departmentHeader.textContent = department;
    departmentSection.appendChild(departmentHeader);

    const departmentEmployeeList = document.createElement("ul");
    departmentSection.appendChild(departmentEmployeeList);

    departments[department].forEach((employee) => {
      const employeeContainer = document.createElement("li");
      employeeContainer.innerHTML = employee.render();
      departmentEmployeeList.appendChild(employeeContainer);
    });

    employeeList.appendChild(departmentSection);
  }
}

// ...


// Call the renderEmployees function
renderEmployees();