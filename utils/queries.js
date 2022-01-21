const getAllEmployees = `
SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  emp_role.title,
  department.name,
  emp_role.salary,
  CONCAT(e2.first_name, ' ', e2.last_name) as [manager]
FROM
  employee
  LEFT JOIN emp_role ON emp_role.id = employee.emp_role_id
  LEFT JOIN department on department.id = emp_role.department_id
  LEFT JOIN employee AS e2 ON e2.id = employee.manager_id
`;

const getOneEmployee = `SELECT * FROM employee WHERE`

module.exports = { getAllEmployees }