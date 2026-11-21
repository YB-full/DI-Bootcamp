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
CREATE TABLE book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL, 
	author VARCHAR(50) NOT NULL 
	)
INS	
	
