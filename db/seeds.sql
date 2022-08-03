INSERT INTO department (`name`)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO `role` (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Sales Person", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Marcela", "Mejia", 3, null),
        ("Ruben", "Funai", 4, 1),
        ("Angie", "Nino", 1, null),
        ("Ruth", "Ortiz", 2, 3),
        ("Satiago", "Villamizar", 5, null),
        ("Alfonso", "Jimenez", 6, 5),
        ("Mercedes", "Videme", 7, null),
        ("Patricia", "Idarraga", 8, 7);

