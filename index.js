// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

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

function showMenu() {
  inquirer.prompt(menuQuestion)
  .then(function(menuAnswer){
      if(menuAnswer.menu === "View all Departments"){
        db.query('SELECT * FROM department', function (err, results) {
          console.log(results);
        });
      } else if (menuAnswer.menu === "View all Roles" ) {
      
      } else if (menuAnswer.menu === "View all Employees" ) {

      } else if (menuAnswer.menu ===  "Add a Deparment" ) {
      
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
