// Constructor function for Employee
function Employee(fullName, level, department) {
    this.fullName = fullName;
    this.level = level;
    this.department = department;
  }
  
  // Generate a unique four-digit employee ID
  Employee.prototype.generateEmployeeId = function () {
    return Math.floor(1000 + Math.random() * 9000);
  };
  
  // Calculate the salary range based on employee level
  Employee.prototype.calculateSalaryRange = function () {
    switch (this.level) {
      case "Senior":
        return { min: 1500, max: 2000 };
      case "Mid-Senior":
        return { min: 1000, max: 1500 };
      case "Junior":
        return { min: 500, max: 1000 };
      default:
        return { min: 0, max: 0 };
    }
  };
  
  // Generate a random salary within the given range
  Employee.prototype.generateSalary = function () {
    const salaryRange = this.calculateSalaryRange();
    return Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
  };
  
  // Render employee information in the table
  function renderEmployees() 
    const employeeTable = document.getElementById("employee-table");
    const tbody
  