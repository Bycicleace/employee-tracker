# Employee Tracker

## Descriptions
A back end application that uses a SQL server connection to perform various tasks in regards to employee management. With this Command Line Utility, you are able to create Departments, Roles, and Employees, with the added ability to be able to change the role of the Employee.

## Installation Instructions
### Prerequisites
- Node.js
- gitBash (optional)

### Instructions
- At the root level, run `npm i` to install the required packages
- At the command line, run `npm start`

## Usage Instructions
When starting it up, you will be given a menu with the following options:
- View All Departments
  - This will show a table of all the Departments, along with their IDs
- View All Roles
  - This will show a table of all the Roles including the ID, title, salary for the role, and the department the role is assigned to
- View All Employees
  - This will show a full list of Employees with all of their information: Name, Role, Department, Manager, and Salary
- Add a Department
  - Enter a name for a new department, and it gets added to the table
- Add a Role
  - Enter a name, salary, and department, and it gets added to the table
- Add an Employee
  - Enter the name, role, and manager, and the employee gets added
- Update Employee Role
  - Select the Employee, and the new role and the employee will have the new role assigned.

## Walkthrough
For a video walkthrough, [visit this link]()

## Author
Elliott Kvamme, 2022