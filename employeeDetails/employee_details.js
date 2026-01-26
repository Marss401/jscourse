const employees = [ 
    {id: 1, name: "Hannah Banana", department: "IT", salary: 50000, specialization: 'JavaScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'JavaScript'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'JavaScript' },
]
function displayEmployees(){
    const totalEmployees = employees.map(employee => `<p>${employee.id}:${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Slaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>Employee: ${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }
function findBySpecialization(specialization){
    const findSpecialization = employees.find(employee => employee.specialization === specialization);
    if(findSpecialization){
        document.getElementById('employeesDetails').innerHTML = `<p>${findSpecialization.id}: ${findSpecialization.name} - ${findSpecialization.department} - $${findSpecialization.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>No employee found with this specialization</p>`
    }
}