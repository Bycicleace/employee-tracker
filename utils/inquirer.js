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
                        await this.viewAll(sqlGetAllDepartments);
                        break;
                
                    case 'View All Roles':
                        await this.viewAll(sqlGetAllRoles);
                        break;
                    
                    case 'View All Employees':
                        await this.viewAll(sqlGetAllEmployees);
                        break;

                    case 'Add a Department':
                        this.addDepartment();
                        break;
                    
                    case 'Add a Role':
                        this.addRole();
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
        .then(data => {
            console.table(data);
            this.mainMenu();
        })
        .catch(err => {
            console.error(err);
        });
    };

    Tracker.prototype.addDepartment = function() {
        // Prompt for New Department name
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'Enter the new Department name:'
        })
        .then(({ name }) => {
            if (name) {
                console.log(name);
                return new Promise((resolve, reject) => {
                    db.query(sqlCreateDepartment, [name], (err, data) => {
                        if (!err) {
                            resolve(data);
                        } else {
                            reject(err);
                        }
                    })
                })
                .then(data => {
                    console.table(data);
                    this.mainMenu();
                })
                .catch(err => {
                    console.error(err);
                })
            } else {
                console.log("Invalid name. Returning to main menu...");
                this.mainMenu();
            }
        }).catch(err => {
            console.error(err);
        })
    };

    Tracker.prototype.addRole = function() {
        console.log('adding role...');
        // need title, salary, and department id
        return this.mainMenu();
    };

    Tracker.prototype.addEmployee = function() {
        console.log("There's no room!");
        // need first and last name, role id and manager id
        return this.mainMenu();
    };

    Tracker.prototype.updateEmployeeRole = function() {
        console.log("I'm afraid I can't do that Dave.");
        // need new role id and employee id
        return this.mainMenu();
    }

};

module.exports = new Tracker();