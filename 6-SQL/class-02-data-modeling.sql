CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER REFERENCES course(id) 
    ON DELETE CASCADE
);

DROP TABLE students;

CREATE TABLE course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload INTEGER NOT NULL
);

DROP TABLE course;

INSERT INTO students (name, email, id_course) 
VALUES 
("Erick", "erick@gmail.com", 1),
("Jorge", "jorge@gmail.com", 2),
("Daniel", "daniel@gmail.com", 2);

INSERT INTO course (name, workload) 
VALUES 
("Web Development", 360),
("Data Analysis", 240),
("Cyber Security", 240);

SELECT * FROM students;
SELECT * FROM course;

--INNER, RIGHT, LEFT, FULL
SELECT students.name, course.name AS course 
FROM students
INNER JOIN course
ON students.id_course = course.id;

DELETE FROM students WHERE id = 1;
DELETE FROM course WHERE id = 1;