// Employee Data
const employees = [
  {
    fullName: "Ahmad Basha",
    level: "Senior",
    department: "Administration"
  },
  {
    fullName: "Yara Saddam",
    level: "Junior",
    department: "Marketing"
  },
  {
    fullName: "Bahaa Joho",
    level: "Junior",
    department: "Development"
  },
  {
    fullName: "Rand Mohanad",
    level: "Mid-Senior",
    department: "Finance"
  }
];

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

// Render employee information in the table
function renderEmployees() {
  const employeeTable = document.getElementById("employee-table");
  const tbody = document.createElement("tbody");

  employees.forEach((employee) => {
    const row = document.createElement("tr");

    const employeeId = generateEmployeeId();
    const employeeDepartment = employee.department;
    const employeeLevel = employee.level;
    const salaryRange = calculateSalaryRange(employeeLevel);
    const salary = generateSalary(salaryRange.min, salaryRange.max);

    const employeeName = document.createElement("td");
    employeeName.textContent = employee.fullName;
    row.appendChild(employeeName);

    const employeeIdElem = document.createElement("td");
    employeeIdElem.textContent = employeeId;
    row.appendChild(employeeIdElem);

    const employeeDepartmentElem = document.createElement("td");
    employeeDepartmentElem.textContent = employeeDepartment;
    row.appendChild(employeeDepartmentElem);

    const employeeLevelElem = document.createElement("td");
    employeeLevelElem.textContent = employeeLevel;
    row.appendChild(employeeLevelElem);

    const employeeSalary = document.createElement("td");
    employeeSalary.textContent = `$${salary}`;
    row.appendChild(employeeSalary);

    tbody.appendChild(row);
  });

  employeeTable.appendChild(tbody);
}

// Call the renderEmployees function to display employee information on the home page
renderEmployees();
