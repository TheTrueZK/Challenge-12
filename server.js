const inquirer = require("inquirer");

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