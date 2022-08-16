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
}