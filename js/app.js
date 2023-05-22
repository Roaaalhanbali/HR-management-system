
// Employee Data
const employees = [
  {
      fullName: "Ahmad Basha",
      salary: 1800,
      department: "Administration"
  },
  {
      fullName: "Yara Saddam",
      salary: 1200,
      department: "Marketing"
  },
  {
      fullName: "Bahaa Joho",
      salary: 800,
      department: "Development"
  },
  {
      fullName: "Rand Mohanad",
      salary: 950,
      department: "Finance"
  }
];

// Generate a unique four-digit employee ID
function generateEmployeeId() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Calculate the employee level based on salary range
function calculateLevel(salary) {
  if (salary >= 1500 && salary <= 2000) {
      return "Senior";
  } else if (salary >= 1000 && salary <= 1500) {
      return "Mid-Senior";
  } else if (salary >= 500 && salary <= 1000) {
      return "Junior";
  } else {
      return "Unknown";
  }
}

// Render employee information in the table
function renderEmployees() {
  const employeeTable = document.getElementById("employee-table");

  employees.forEach((employee) => {
      const row = document.createElement("tr");

      const employeeId = generateEmployeeId();
      const employeeDepartment = employee.department;
      const employeeLevel = calculateLevel(employee.salary);

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
      employeeSalary.textContent = `$${employee.salary}`;
      row.appendChild(employeeSalary);

      employeeTable.appendChild(row);
  });
}

// Call the renderEmployees function to display employee information on the home page
renderEmployees();
