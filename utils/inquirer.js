const inquirer = require('inquirer');
const {
    sqlGetAllEmployees,
    sqlGetOneEmployee,
    sqlGetAllDepartments,
    sqlGetAllRoles,
    sqlCreateEmployee,
    sqlCreateDepartment,
    sqlCreateRole,
    sqlUpdateEmployeeManager
} = require('./queries');

const main = () => {
    console.log("Hello World");
};

module.exports = main;