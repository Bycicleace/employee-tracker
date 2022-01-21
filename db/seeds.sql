INSERT INTO department (name)
VALUES
    ('Executives'),
    ('Application Development'),
    ('Infrastructure Management')
    ('Operations Management'),
    ('Cyber Security'),
    ('User Support & Service');

INSERT INTO emp_role (title, salary, department_id)
VALUES
    ('CTO', 200000, 0),
    ('Development Manager', 120000, 1)
    ('Software Developer', 95000, 1),
    ('Data Science Technician', 90000, 1),
    ('Infrastructure Manager', 100000, 2),
    ('Desktop Technician', 48000, 2),
    ('Network Technician', 57000, 2),
    ('Network Administrator', 82000, 2),
    ('Operations Manager', 100000, 3),
    ('Application Administrator', 80000, 3),
    ('Quality Assurance Analyst', 60000, 3),
    ('Security Manager', 120000, 4),
    ('Security Technician', 90000, 4),
    ('Customer Service Manager', 80000, 5),
    ('Customer Service Representative', 50000, 5);

INSERT INTO employee (first_name, last_name, emp_role_id, manager_id)
VALUES
    ('Mabel', 'Walter', 0, NULL),
    ('Alexander', 'Hand', 1, 0),
    ('Gracie', 'Kerluke', 4, 0),
    ('Nicholas Mueller', 8, 0),
    ('Americo', 'Kilback', 11, 0),
    ('Marcos', 'Lemke', 13, 0),
    ('Audreanne', 'Gusikowski', 2, 1),
    ('Santos', 'Emmerich', 2, 1),
    ('Sierra', 'Bergstrom', 3, 1),
    ('Ova', 'Barton', 3, 1),
    ('Jerry', 'Bergnaum', 5, 4),
    ('Cicero', 'Von', 5, 4),
    ('Madyson', 'Fisher', 6, 4),
    ('Johnny', 'Simmons', 6, 4),
    ('Lizeth', 'Rempel', 7, 4),
    ('Thelma', 'Heller', 9, 8),
    ('Isaac', 'McLaughlin', 10, 8),
    ('Katlyn', 'Little', 10, 8),
    ('Kaelyn', 'Schultz', 12, 11),
    ('Cameron', 'Labadie', 14, 13),
    ('Anissa', 'Lueilwitz', 14, 13),
    ('Abigail', 'Kuphal', 14, 13),
    ('Autumn', 'Grady', 14, 13),
    ('Enos', 'Sawayn', 14, 13);