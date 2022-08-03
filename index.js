// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password123',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

// Menu questions
const menuQuestion = [
  {
      type: 'list',
      choices: [
          "View all Departments", 
          "View all Roles", 
          "View all Employees",
          "Add a Deparment",
          "Add a Role",
          "Add an Employee",
          "Update an Employee role",
          "Quit"
      ],
      name: 'menu',
      message: 'What would you like to do:',
  },
];

const addDepartmentQuestions = [
  {
      type: 'input',
      name: 'name',
      message: "What is the name of the department?",
  },
];

function showMenu() {
  inquirer.prompt(menuQuestion)
  .then(function(menuAnswer){
      if(menuAnswer.menu === "View all Departments"){
        db.query('SELECT * FROM department', function (err, results) {
          console.table(results);
          showMenu();
        });
      } else if (menuAnswer.menu === "View all Roles" ) {
        db.query('SELECT role.id, role.title, department.name AS department, role.salary ' + 
                  'FROM role ' + 
                  'JOIN department ON role.department_id = department.id;', 
                  function (err, results) {
                    if (err) {
                      console.log(err);
                    }
                    console.table(results);
                    showMenu();
                  }
        );      
      } else if (menuAnswer.menu === "View all Employees" ) {
        db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, " " , manager.last_name) AS manager '  + 
                  'FROM employee ' + 
                  'LEFT JOIN employee AS manager ON employee.manager_id = manager.id ' +
                  'JOIN role ON employee.role_id = role.id ' +
                  'JOIN department ON role.department_id = department.id;',
                  function (err, results) {
                    if (err) {
                      console.log(err);
                    }

                    console.table(results);
                    showMenu();
                  }
        );
      } else if (menuAnswer.menu ===  "Add a Deparment" ) {
        inquirer.prompt(addDepartmentQuestions)
          .then(function (departmentAnswer) {
            const departmentName = departmentAnswer.name;
            db.query(`INSERT INTO department (name) VALUES ("${departmentName}")`,
              function (err, results) {
                if (err) {
                  console.log(err);
                }
                showMenu();
              }
            );
          });
      } else if (menuAnswer.menu === "Add a Role" ) {

      } else if (menuAnswer.menu === "Add an Employee" ) {

      } else if (menuAnswer.menu === "Update an Employee role" ) {

      } else {
        // We are finished, so exit
        process.exit();
      }
  });
}

function printBanner()
{
  console.log(`
************
* Employee *
* Manager  *
************
  `);
}

function init() {
  printBanner();

  showMenu();
}

init();
