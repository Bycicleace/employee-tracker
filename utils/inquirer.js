const db = require('../db/connection');
const cTable = require('console.table');
const inquirer = require('inquirer');
const {
    sqlGetAllEmployees,
    sqlGetOneEmployee,
    sqlGetAllDepartments,
    sqlGetAllRoles,
    sqlCreateEmployee,
    sqlCreateDepartment,
    sqlCreateRole,
    sqlUpdateEmployeeRole
} = require('./queries');

function Tracker() {
    Tracker.prototype.mainMenu = async function() {
        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update Employee Role',
                    'Quit'
                ]
            })
            .then(async ({ action }) => {
                switch (action) {
                    case 'View All Departments':
                        const depts = await this.viewAll(sqlGetAllDepartments);
                        console.table(depts);
                        this.mainMenu();
                        break;
                
                    case 'View All Roles':
                        const roles = await this.viewAll(sqlGetAllRoles);
                        console.table(roles);
                        this.mainMenu();
                        break;
                    
                    case 'View All Employees':
                        const emps = await this.viewAll(sqlGetAllEmployees);
                        console.table(emps);
                        this.mainMenu();
                        break;

                    case 'Add a Department':
                        this.addDepartment();
                        break;
                    
                    case 'Add a Role':
                        await this.addRole();
                        break;
                    
                    case 'Add an Employee':
                        this.addEmployee();
                        break;
                    
                    case 'Update Employee Role':
                        this.updateEmployeeRole();
                        break;

                    case 'Quit':
                        db.end();
                        break;

                    default:
                        console.log("Bad choice, try again");
                        this.mainMenu();
                        break;
                }
            })
    };

    Tracker.prototype.viewAll = async function(sql) {
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        })
        .catch(err => {
            console.error(err);
        });
    };

    Tracker.prototype.addDepartment = function() {
        // Prompt for New Department name
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter the new Department name:'
        })
        .then(({ name }) => {
            if (typeof name === 'string') {
                return new Promise((resolve, reject) => {
                    db.query(sqlCreateDepartment, [name], (err, data) => {
                        !err ? resolve(data) : reject(err);
                    })
                })
                .then(this.mainMenu())
                .catch(err => console.error(err));
            } else {
                console.log("Invalid name. Returning to main menu...");
                this.mainMenu();
            }
        }).catch(err => {
            console.error(err);
        })
    };

    Tracker.prototype.addRole = function() {
        inquirer.prompt({
            type: 'input',
            name: 'title',
            message: "Enter the new Role's title: "
        })
        .then(({ title }) => {
            if (title) {
                inquirer.prompt({
                    type: 'input',
                    name: 'salary',
                    message: "What is the salary of the new Role? "
                })
                .then(({ salary }) => {
                    if (salary) {
                        this.viewAll(sqlGetAllDepartments)
                            .then(data => {
                                let depts = data.map(item => {return {name: item.name, value: item.id}});
                                inquirer.prompt({
                                    type: 'list',
                                    name: "dept_id",
                                    message: "Select a department for the new Role: ",
                                    choices: depts
                                })
                                .then(({ dept_id }) => {
                                    if(dept_id) {
                                        return new Promise((resolve, reject) => {
                                            db.query(sqlCreateRole, [title, salary, dept_id], (err, data) => {
                                                !err ? resolve(data) : reject(err);
                                            })
                                        })
                                        .then(this.mainMenu())
                                        .catch(err => console.error(err));
                                    } else {
                                        console.log("Invalid entry. Returning to main menu...");
                                        this.mainMenu();
                                    }
                                })
                            })
                    } else {
                        console.log("Invalid salary. Returning to main menu...");
                        this.mainMenu();
                    }
                })
            } else {
                console.log("Invalid title. Returning to main menu...");
                this.mainMenu();
            }
        })
    };

    Tracker.prototype.addEmployee = function() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'fName',
                    message: 'Enter the first name of the new Employee: '
                },
                {
                    type: 'input',
                    name: 'lName',
                    message: 'Enter the last name of the new Employee: '
                }
            ])
            .then(({ fName, lName }) => {
                if (fName && lName) {
                    this.viewAll(sqlGetAllRoles)
                        .then(data => {
                            let roles = data.map(item => {return {name: item.title, value: item.id}})
                            inquirer.prompt({
                                type: 'list',
                                name: 'roleId',
                                message: "Select the new employee's Role: ",
                                choices: roles
                            })
                            .then(({ roleId }) => {
                                if (roleId) {
                                    this.viewAll(sqlGetAllEmployees)
                                        .then(data => {
                                            let emps = data.map(item => {return {name: item.first_name + ' ' + item.last_name, value: item.id}})
                                            inquirer.prompt({
                                                type: 'list',
                                                name: 'empId',
                                                message: "Select the new Employee's manager: ",
                                                choices: emps
                                            })
                                            .then(({ empId }) => {
                                                if (empId) {
                                                    return new Promise((resolve, reject) => {
                                                        db.query(sqlCreateEmployee, [fName, lName, roleId, empId], (err, data) => {
                                                            !err ? resolve(data) : reject(err);
                                                        })
                                                    })
                                                    .then(this.mainMenu())
                                                    .catch(err => console.error(err));
                                                } else {
                                                    console.error("Invalid Department. Returning to main menu...");
                                                    this.mainMenu();
                                                }
                                            })
                                        })
                                } else {
                                    console.error("Invalid Role. Returning to main menu...");
                                    this.mainMenu();
                                }
                            })
                        })
                } else {
                    console.error("Invalid name. Returning to main menu...");
                    this.mainMenu();
                }
            })
    };

    Tracker.prototype.updateEmployeeRole = function() {
        // Prompt for employee
        // Prompt for new role, filter out current role, then display
        this.viewAll(sqlGetAllEmployees)
            .then(data => {
                let emps = data.map(item => {return {name: item.first_name + ' ' + item.last_name, value: item.id}})
                inquirer.prompt({
                    type: 'list',
                    name: 'empId',
                    message: 'Which Employee would you like to update? ',
                    choices: emps
                })
                .then(({ empId }) => {
                    this.viewAll(sqlGetAllRoles)
                        .then(data => {
                            let roles = data.map(item => {return {name: item.title, value: item.id}})
                            inquirer.prompt({
                                type: 'list',
                                name: 'roleId',
                                message: 'Please select the new role for this employee',
                                choices: roles
                            })
                            .then(({ roleId }) => {
                                if (empId && roleId) {
                                    return new Promise((resolve, reject) => {
                                        db.query(sqlUpdateEmployeeRole, [roleId, empId], (err, data) => {
                                            !err ? resolve(data) : reject(err);
                                        })
                                    })
                                    .then(this.mainMenu())
                                    .catch(err => console.error(err))
                                } else {
                                    console.error("Invalid selections. Returning to main menu...");
                                }
                            })
                        })
                })
            })
    }

};

module.exports = new Tracker();