USE employeeTracker_db;

INSERT INTO department (name)
VALUES ("City Planning"),
       ("Parks Department"),
       ("Public Health"),
       ("Administration Office"),
       ("Service Staff");

INSERT INTO role (title, salary, department_id)
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
       ("Office Manager", 60000,2)
       ("Associate Administrator", 50000, 2);

Insert INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leslie", "Knope", 1, 5),--PD--
       ("Ann", "Perkins", 2, null),--PH--
       ("Mark", "Brendanawicz", 3, null),--CP--
       ("Tom", "Haveford", 4, 1),--PD--
       ("Ron", "Swanson", 5, 1),--PD--
       ("April", "Ludgate", 6, 5),--PD--
       ("Andy", "Dwyer", 7, null),--Service--
       ("Ben", "Wyatt", 8, 9),--AO--
       ("Chris", "Traeger", 9, null),--AO--
       ("Jerry", "Gergich", 10, 1),--PD--
       ("Donna", "Meagle", 11, 1),--PD--
       ("Craig", "Middlebrooks", 12, 1),--PD--

