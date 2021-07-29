//Requirements

const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
require("dotenv").config();
const logo = require('asciiart-logo');

//Connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeeTracker_db",
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("You are now connected!");
  startMenu();
});

//Ascii Art Attempt

console.log(logo({ 
  name: "Employee Tracker!",
  font:"Slant",
  logoColor: "bold-cyan",
  textColor: "yellow"
  })
  .emptyLine()
  .center("Welcome! Please select an option using the arrow keys to view or modify database tables")
  .render()
);

//Start Function

function startMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose One",
        name: "choice",
        choices: ["View Departments", "Add Departments", "View Roles","Add Roles", "View Employees","Add Employees", "Exit"],
      },
    ])
//Bonus [update employee managers, view employees by manager, view employees by department, delete departments, roles, and employees, view budget of a department]
    .then((answer) => {
      console.log(answer.choice);
      switch (answer.choice) {
        case "View Departments":
          viewDepartments();
          break;
        case "Add Departments":
          addDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;
        case "Add Roles":
          addRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;
        case "Add Employees":
          addEmployees();
          break;

        default:
          console.log("Goodbye");
          connection.end();
      }
    });
}

//View Departments

function viewDepartments() {
  connection.query("SELECT * FROM departments", function (err, results) {
    if (err) throw err;
    console.table(results);
    startMenu();
  });
}

//View Roles

function viewRoles() {
  connection.query("SELECT * FROM roles", function (err, results) {
    if (err) throw err;
    console.table(results);
    startMenu();
  });
}

//View Employees

function viewEmployees() {
  connection.query("SELECT * FROM employees", function (err, results) {
    if (err) throw err;
    console.table(results);
    startMenu();
  });
}

//Add Departments

function addDepartments() {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department that you want to add?",
        name: "department",
      },
    ])
    .then(results=> {
        let {department} = results;
        connection.query("INSERT INTO departments SET ?", {name: department}, function (err, results) {
        if (err) throw err;
        console.table(results);
        console.log("Department added to the database!");
        console.log("-------------------------\n");
        viewDepartments();
        });
})
};

//Add Roles

function addRoles() {
  connection.query("SELECT id, name FROM departments",function (err, data) {
    if (err) throw err;
  let departments = data.map(item => {
    return {value:item.id, name:item.name}
  })
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the role that you would like to add?",
      name: "roleTitle",
    },
    {
      type: "input",
      message: "What is the salary for the role that you are adding?",
      name: "roleSalary",
    },
    {
      type: "list",
      message: "Choose a department for your new role",
      name: "choice",
      choices: departments,
    },
  ])
  .then(results=> {
    //When adding department_id, returns a null value?
    console.log(results)
      connection.query("INSERT INTO roles SET ?", {title:results.roleTitle, salary:results.roleSalary, department_id:results.choice}, function (err, results) {
      if (err) throw err;
      console.table(results);
      console.log("Role added to the database!");
      console.log("-------------------------\n");
      viewRoles();
      });
})
})
};

//Add Employees

function addEmployees() {
  connection.query("SELECT id, title, department_id FROM roles",function (err, data) {
    if (err) throw err;
  let roles = data.map(item => {
    return {value:item.id, name:item.title, value:item.department_id}
  })
  connection.query("SELECT first_name, last_name, manager_id FROM employees",function (err, data) {
    if (err) throw err;
  let managers = data.map(item => {
    return {name:item.first_name, name:item.last_name, value:item.manager_id}
  })
  console.log(managers);
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the new employee's FIRST name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the new employee's LAST name?",
      name: "lastName",
    },
    {
      type: "list",
      message: "Choose a role for the new employee.",
      name: "role",
      choices: roles,
    },
    // {
    //   type: "confirm",
    //   message: "Does this employee have a manager?",
    //   name: "confirm",
    // },
    {
      type: "list",
      message: "Choose a manager for the new employee.",
      name: "manager",
      choices: managers,
    },
  ])
  .then(results=> {
    console.log(results);
     //When adding manager_id, returns a null value?
      connection.query("INSERT INTO employees SET ?", {first_name: results.firstName, last_name: results.lastName, role_id:results.role, manager_id:results.manager}, function (err, results) {
      if (err) throw err;
      console.table(results);
      console.log("Employee added to the database!");
      console.log("-------------------------\n");
      viewEmployees();
      });
})
})
})
};

