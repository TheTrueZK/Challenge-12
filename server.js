const inquirer = require("inquirer");
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
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

