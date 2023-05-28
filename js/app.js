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

// employee ID
function generateEmployeeID(usedIDs) {
  let minID = 1000;
  let maxID = 1006;
  let newID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;

  while (usedIDs.includes(newID)) {
    newID = Math.floor(Math.random() * (maxID - minID + 1)) + minID;
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
renderEmployees();
renderEmployeeList();
