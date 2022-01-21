INSERT INTO department (name)
VALUES
    ('Executives'),
    ('Application Development'),
    ('Infrastructure Management'),
    ('Operations Management'),
    ('Cyber Security'),
    ('User Support & Service');

INSERT INTO emp_role (title, salary, department_id)
VALUES
    ('CTO', 200000.00, 1),
    ('Development Manager', 120000.00, 2),
    ('Software Developer', 95000.00, 2),
    ('Data Science Technician', 90000.00, 2),
    ('Infrastructure Manager', 100000.00, 3),
    ('Desktop Technician', 48000.00, 3),
    ('Network Technician', 57000.00, 3),
    ('Network Administrator', 83000.00, 3),
    ('Operations Manager', 100000.00, 4),
    ('Application Administrator', 80000.00, 4),
    ('Quality Assurance Analyst', 60000.00, 4),
    ('Security Manager', 120000.00, 5),
    ('Security Technician', 90000.00, 5),
    ('Customer Service Manager', 80000.00, 6),
    ('Customer Service Rep', 50000.00, 6);

INSERT INTO employee (first_name, last_name, emp_role_id, manager_id)
VALUES
    ('Mabel', 'Walter', 1, NULL);

INSERT INTO employee (first_name, last_name, emp_role_id, manager_id)
VALUES
    ('Alexander', 'Hand', 2, 1),
    ('Gracie', 'Kerluke', 5, 1),
    ('Nicholas', 'Mueller', 9, 1),
    ('Americo', 'Kilback', 12, 1),
    ('Marcos', 'Lemke', 14, 1);

INSERT INTO employee (first_name, last_name, emp_role_id, manager_id)
VALUES
    ('Audreanne', 'Gusikowski', 3, 2),
    ('Santos', 'Emmerich', 3, 2),
    ('Sierra', 'Bergstrom', 4, 2),
    ('Ova', 'Barton', 4, 2),
    ('Jerry', 'Bergnaum', 6, 5),
    ('Cicero', 'Von', 6, 5),
    ('Madyson', 'Fisher', 7, 5),
    ('Johnny', 'Simmons', 7, 5),
    ('Lizeth', 'Rempel', 8, 5),
    ('Thelma', 'Heller', 10, 9),
    ('Isaac', 'McLaughlin', 11, 9),
    ('Katlyn', 'Little', 11, 9),
    ('Kaelyn', 'Schultz', 13, 12),
    ('Cameron', 'Labadie', 15, 14),
    ('Anissa', 'Lueilwitz', 15, 14),
    ('Abigail', 'Kuphal', 15, 14),
    ('Autumn', 'Grady', 15, 14),
    ('Enos', 'Sawayn', 15, 14);