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
    Tracker.prototype.mainMenu = function() {
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
                    'Update Employee Role'
                ]
            })
            .then(({ action }) => {
                switch (action) {
                    case 'View All Departments':
                        this.viewAllDepartments();
                        break;
                
                    case 'View All Roles':
                        this.viewAllRoles();
                        break;
                    
                    case 'View All Employees':
                        this.viewAllEmployees();
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

                    default:
                        console.log("Bad choice, try again");
                        this.mainMenu();
                        break;
                }
            })
    };

    Tracker.prototype.viewAllDepartments = function() {
        db.query(sqlGetAllDepartments, (err, data) => {
            if (!err) {
                console.table(data);
            } else {
                console.error(err);
            }
        });
        return this.mainMenu();
    };

    Tracker.prototype.viewAllRoles = function() {
        db.query(sqlGetAllRoles, (err, data) => {
            if (!err) {
                console.table(data);
            } else {
                console.error(err);
            }
        });
        return this.mainMenu();
    };

    Tracker.prototype.viewAllEmployees = function() {
        db.query(sqlGetAllEmployees, (err, data) => {
            if (!err) {
                console.table(data)
            } else {
                console.error(err);
            }
        })
        return this.mainMenu();
    };

    Tracker.prototype.addDepartment = function() {
        console.log('adding department...');
        // Need name
        return this.mainMenu();
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