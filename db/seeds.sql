USE employeeTracker_db;

INSERT INTO departments (name)
VALUES ("City Manager's Office"),
       ("Parks Department"),
       ("Public Health"),
       ("Service Staff"),
       ("City Planning");

INSERT INTO roles (title, salary, department_id)
VALUES ("City Manager", 120000, 1),
       ("City Auditor", 90000, 1),
       ("Deputy-Director", 75000, 2),
       ("Associate", 50000, 2),
       ("Senior Associate", 45000, 2),
       ("Office Administrator", 60000,2),
       ("Director", 85000, 2),
       ("Assistant", 40000, 2),
       ("Nurse", 80000, 3),
       ("Shoeshiner", 10000, 4),
       ("City-Planer", 100000, 5);
      
       

Insert INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Traeger", 1, null),
       ("Ben", "Wyatt", 2, 1),
       ("Leslie", "Knope", 3, null),
       ("Tom", "Haveford", 4, 3),
       ("Jerry", "Gergich", 5, 3),
       ("Donna", "Meagle", 6, 3),
       ("Ron", "Swanson", 7, null),
       ("April", "Ludgate", 8, 7),
       ("Ann", "Perkins", 9, null),
       ("Andy", "Dwyer", 10, null),
       ("Mark", "Brendanawicz", 11, null);




