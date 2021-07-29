USE employeeTracker_db;

INSERT INTO departments (name)
VALUES ("City Planning"),
       ("Parks Department"),
       ("Public Health"),
       ("Administration Office"),
       ("Service Staff");

INSERT INTO roles (title, salary, department_id)
VALUES ("Deputy-Director", 75000, 2),
       ("Nurse", 80000, 3),
       ("City-Planer", 100000, 1),
       ("Associate", 50000, 2),
       ("Director", 85000, 2),
       ("Assistant", 40000, 2),
       ("Shoeshiner", 10000, 5),
       ("City Auditor", 90000, 4),
       ("City Manager", 120000, 4),
       ("Senior Associate", 45000, 2),
       ("Office Manager", 60000,2),
       ("Associate Administrator", 50000, 2);

Insert INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Leslie", "Knope", 1, null),
       ("Ann", "Perkins", 2, null),
       ("Mark", "Brendanawicz", 3, null),
       ("Tom", "Haveford", 4, 1),
       ("Ron", "Swanson", 5, 1),
       ("April", "Ludgate", 6, 5),
       ("Andy", "Dwyer", 7, null),
       ("Chris", "Traeger", 8, null),
       ("Ben", "Wyatt", 9, 8),
       ("Jerry", "Gergich", 10, 1),
       ("Donna", "Meagle", 11, 1),
       ("Craig", "Middlebrooks", 12, 1);

