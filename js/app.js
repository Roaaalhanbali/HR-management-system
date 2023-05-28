
"use strict";

let employees = [
  {
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    ImageUrl:
      "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
  },
  {
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    ImageUrl:
      "https://media.istockphoto.com/id/1319763830/photo/portrait-of-smiling-mixed-race-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=L0d04sc89UuLW0G80UCu4egl0tQwyl8PLKsIZotbP_U=",
  },
  {
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    ImageUrl:
      "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg",
  },
  {
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    ImageUrl:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg",
  },
  {
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    ImageUrl:
      "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    ImageUrl:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
  },
  {
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    ImageUrl:
      "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg",
  },
];

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


// employee ID
function generateEmployeeID(usedIDs) {
  let minID = 1000;
  let maxID = 1006;
  let newID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;


  while (usedIDs.includes(newID)) {
    newID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;


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

  return newID;
}

// employee salary
function calculateSalary(level) {
  let salaryTable = {
    Junior: { min: 500, max: 1000 },
    "Mid-Senior": { min: 1000, max: 1500 },
    Senior: { min: 1500, max: 2000 },
  };

  let { min, max } = salaryTable[level];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculating net salary after tax deduction
function calculateNetSalary(salary) {
  let taxPercent = 7.5;
  let taxAmount = (salary * taxPercent) / 100;
  return salary - taxAmount;
}

// Adding employee properties and calculating salaries
let usedIDs = [];
employees.forEach((employee) => {
  employee.employeeID = generateEmployeeID(usedIDs);
  usedIDs.push(employee.employeeID);
  employee.salary = calculateSalary(employee.level);
  employee.netSalary = calculateNetSalary(employee.salary);
});

// Render employees in the table
function renderEmployees() {
  let tableBody = document.querySelector("#employee-table tbody");

  employees.forEach((employee) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.fullName}</td>
      <td>${employee.employeeID}</td>
      <td>${employee.department}</td>
      <td>${employee.level}</td>
      <td>${employee.netSalary}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Render employees in the list
function renderEmployeeList() {
  let employeeList = document.getElementById("employee-list");

  employees.forEach((employee) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>Employee Name: ${employee.fullName}</h3>
      <p>Employee Salary: ${employee.netSalary}</p>
      <img src="${employee.ImageUrl}" alt="${employee.fullName}">
    `;
    employeeList.appendChild(listItem);
  });
}

// Call the render functions

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




// Call the renderEmployees function
renderEmployees();
renderEmployeeList();
