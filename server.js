const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
require('dotenv').config();


let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
});

connection.connect((err) => {
    if (err) throw err;
    initialPrompt();
})

function initialPrompt() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "",
            choices: [
                "View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department"
            ]
        })
        .then(function ({task}) {
            switch (task) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                
                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "View All Departments":
                    viewAllDepartments();
                    break;

                case "Add Department":
                    addEmployee();
                    break;
            }
        });
}

function viewEmployees() {
    connection.query(
//SELECT FROM query
        function(err, result) {
            if (err) throw err;
            console.table(result);
            initialPrompt();
        }
    )
}

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            message: "What's the employee's First Name?"
        },
        {
            name: "lastname",
            type: "input",
            message: "What's the employee's Last Name?"
        },
        {
            name: "role",
            type: "list",
            message: "What's the employee's role?",
            choices: //array of choices
        }
    ])
}