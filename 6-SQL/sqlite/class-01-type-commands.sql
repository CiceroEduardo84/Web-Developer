-- DDL(Definição)
CREATE TABLE IF NOT EXISTS students( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    age NUMERIC
);

ALTER TABLE students 
ADD COLUMN city TEXT
NOT NULL DEFAULT "Jucás";

ALTER TABLE students
ADD COLUMN cpf TEXT;

ALTER TABLE students 
DROP COLUMN city;


DROP TABLE students;

-- DML(Manipulação)
INSERT INTO students (name, age) VALUES("Eduardo", 19);
INSERT INTO students (name, age) VALUES("Luiza", 19);
INSERT INTO students (name, age) VALUES("Emanuel", 37);
INSERT INTO students (name, age) VALUES("wellington", 44);
INSERT INTO students (name, age) 
VALUES
("Dudu", 19),
("Jorge", 28),
("Natã", 19),
("Erick", 28);

INSERT INTO students (name, cpf, city, age) 
VALUES
("Eduardo", "123.123.123-01", "Iguatu", 19),
("Luiza","123.123.123-02", "Iguatu", 19),
("Emanuel", "123.123.123-03", "Iguatu", 37),
("wellington","123.123.123-04", "Iguatu", 44);

UPDATE students SET age = 17; --NÂO FAÇA ISSO JAMAIS--
UPDATE students SET city = "Saboeiro" 
WHERE id = 8; 

UPDATE students 
SET age = 17, name = "Cicero" 
WHERE id = 1;

UPDATE students 
SET age = 18
WHERE id = 5;

DELETE FROM students;--NÃO FAÇA ISSO--
DELETE FROM students WHERE id = 9;
DELETE FROM students 
WHERE id >= 8 
AND id <= 9;

-- DQL
SELECT * FROM students;
SELECT name FROM students WHERE id = 1;

SELECT id, name, age 
FROM students 
WHERE id > 2;

SELECT * FROM students 
WHERE age >= 10 AND age <= 20;

SELECT * FROM students 
WHERE age = 18 OR age = 17;

SELECT * FROM students 
WHERE age >= 10 ORDER BY age DESC;