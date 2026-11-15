--Part I
--1
CREATE TABLE customer(
	id SERIAL PRIMARY KEY ,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);
CREATE TABLE customer_profile(
	id SERIAL PRIMARY KEY ,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER UNIQUE NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customer(id)
);
--2
INSERT INTO customer(first_name,last_name)
VALUES
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive')
--3
INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES
	('true',(SELECT id FROM customer WHERE first_name='John' )),
	('false',(SELECT id FROM customer WHERE first_name='Jerome' ))
--4
SELECT c.first_name
FROM customer AS c
INNER JOIN customer_profile AS p ON c.id=p.customer_id
WHERE p.isLoggedIn = true;

SELECT c.first_name,p.isLoggedIn
FROM customer AS c
LEFT JOIN customer_profile AS p ON c.id=p.customer_id

SELECT COUNT(*)
FROM customer AS c
LEFT JOIN customer_profile AS p ON c.id=p.customer_id
WHERE p.isLoggedIn = false OR p.isLoggedIn IS NULL;

--Part II
--1
CREATE TABLE book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL, 
	author VARCHAR(50) NOT NULL 
	)
--2
INSERT INTO book(title,author)
VALUES
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')
	
--3
CREATE TABLE student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	age INTEGER CHECK(age<=15)
	)
--4
INSERT INTO student (name,age)
VALUES
	('John', 12),
	('Lera', 11),
	('Patrick', 10),
	('Bob', 14)
--5
CREATE TABLE library(
	book_fk_id  INTEGER,
	student_fk_id INTEGER ,
	borrowed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (book_fk_id) REFERENCES book(book_id)ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY (book_fk_id,student_fk_id)
	
)

--6
CREATE OR REPLACE function add_borrow(
	p_student_name VARCHAR,
    p_book_title VARCHAR,
    p_date DATE)
RETURNS VOID
LANGUAGE SQL
AS $$
 INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
    VALUES (
        (SELECT book_id FROM book WHERE title = p_book_title),
        (SELECT student_id FROM student WHERE name = p_student_name),
        p_date
    );
$$;


SELECT add_borrow('John', 'Alice In Wonderland', '2022-02-15');
SELECT add_borrow('Bob', 'To kill a mockingbird', '2021-03-03');
SELECT add_borrow('Lera', 'Alice In Wonderland', '2021-05-23');
SELECT add_borrow('Bob', 'Harry Potter', '2021-08-12');

--7
SELECT * FROM library

SELECT s.name ,b.title
FROM library AS l
INNER JOIN student AS s ON s.student_id =l.student_fk_id
INNER JOIN book AS b ON b.book_id=l.book_fk_id

SELECT ROUND(AVG(s.age),1)
FROM student AS s
INNER JOIN library AS l ON s.student_id =l.student_fk_id
INNER JOIN book AS b ON b.book_id=l.book_fk_id
WHERE b.title='Alice In Wonderland'

DELETE FROM student
WHERE student_id = 4
--it automatically delete the row that are connected to the student we delete

	 
	 

	