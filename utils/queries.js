const sqlGetAllEmployees = `
SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  emp_role.title,
  department.name,
  emp_role.salary,
  CONCAT(e2.first_name, ' ', e2.last_name) as manager
FROM
  employee
  LEFT JOIN emp_role ON emp_role.id = employee.emp_role_id
  LEFT JOIN department on department.id = emp_role.department_id
  LEFT JOIN employee AS e2 ON e2.id = employee.manager_id
`;

const sqlGetOneEmployee = `
SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  emp_role.title,
  department.name,
  emp_role.salary,
  CONCAT(e2.first_name, ' ', e2.last_name) as manager
FROM
  employee
  LEFT JOIN emp_role ON emp_role.id = employee.emp_role_id
  LEFT JOIN department on department.id = emp_role.department_id
  LEFT JOIN employee AS e2 ON e2.id = employee.manager_id
WHERE
  employee.id = ?
`

const sqlGetAllDepartments = `
SELECT
  *
FROM
  department
`;

const sqlGetAllRoles = `
SELECT
  emp_role.id,
  emp_role.title,
  emp_role.salary,
  department.name
FROM
  emp_role
  LEFT JOIN department on department.id = emp_role.department_id
`;

const sqlCreateDepartment = `
INSERT INTO department (name)
VALUES (?)
`;

const sqlCreateRole = `
INSERT INTO emp_role (title, salary, department_id)
VALUES (?,?,?)
`;

const sqlCreateEmployee = `
INSERT INTO employee (first_name, last_name, emp_role_id, manager_id)
VALUES (?,?,?,?)
`;

const sqlUpdateEmployeeManager = `
UPDATE employee
SET
  manager_id = ?
WHERE
  employee.id = ?
`;

module.exports = {
  sqlGetAllEmployees,
  sqlGetOneEmployee,
  sqlGetAllDepartments,
  sqlGetAllRoles,
  sqlCreateDepartment,
  sqlCreateRole,
  sqlCreateEmployee,
  sqlUpdateEmployeeManager
}