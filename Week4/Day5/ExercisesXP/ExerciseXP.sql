--Exercise1:DVD Rental
--1
SELECT * FROM language
--2
SELECT 
	f.title,
	f.description,
	l.name AS language_name
FROM film AS f
LEFT JOIN language AS l ON f.language_id=l.language_id
--3
SELECT 
	f.title,
	f.description,
	l.name AS language_name
FROM film AS f
RIGHT JOIN language AS l ON f.language_id=l.language_id
--4
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY,
	name VARCHAR 

)
INSERT INTO new_film(name)
VALUES 
	('Dune'),
	('Harry Potter'),
	('SpiderMan')
--5
CREATE TABLE customer_review(
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER NOT NULL,
	language_id INTEGER NOT NULL,
	title VARCHAR,
	score SMALLINT CHECK (score BETWEEN 1 AND 10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (film_id ) REFERENCES new_film(id) ON  DELETE CASCADE,
	FOREIGN KEY (language_id) REFERENCES language(language_id)
)
--6
INSERT INTO customer_review(
	film_id ,
	language_id ,
	title ,
	score ,
	review_text )
VALUES 	
(1, 1, 'Amazing movie!', 9, 'I loved the story and the acting was brilliant.'),
(2, 1, 'A bit slow', 6, 'Great special effects, though the pacing could be better.')
--7
DELETE FROM new_film
WHERE id=1
--the customer review on this film disappear too
select*from customer_review

--Exercise 2 : DVD Rental
--1
UPDATE  film 
SET language_id =2
WHERE film_id IN (1,2,3)

SELECT * FROM film WHERE language_id=2
--2
-- customer_address_id
--cannot insert a new customer with an arbitrary address_id
--the adress_id provided must already exists in the address table
--3
DROP TABLE customer_review
--easy because it s not a parent table but only a child table
--so won't affect other tables
--4
SELECT COUNT(*) AS outsatnding_rental FROM rental
WHERE return_date IS NULL
--5
SELECT f.title AS most_expensive_outstanding_movies
FROM inventory AS i
INNER JOIN  film AS f ON i.film_id=f.film_id
INNER JOIN rental  AS r ON r.inventory_id=i.inventory_id
WHERE return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30
--6
SELECT f.title AS first_film
FROM film AS f
INNER JOIN film_actor AS fa ON f.film_id=fa.film_id
INNER JOIN actor AS a ON fa.actor_id=a.actor_id 
WHERE f.description ILIKE '%sumo%wrestler%' 
	AND a.first_name='Penelope' 
	AND a.last_name='Monroe'
-- Park Citizen

SELECT title AS second_film
FROM film	
WHERE length=60 AND rating = 'R'
--Bublle Grosse

SELECT f.title AS third_movie
FROM film AS f
INNER JOIN inventory AS i ON i.film_id=f.film_id
INNER JOIN rental as r ON r.inventory_id=i.inventory_id
INNER JOIN customer AS c ON c.customer_id=r.customer_id
WHERE c.first_name='Matthew' 
	AND c.last_name='Mahan'
	AND f.rental_rate > 4
	AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
--Sugar Wonka		

SELECT f.title AS fourth_movie
FROM film AS f
INNER JOIN inventory AS i ON i.film_id=f.film_id
INNER JOIN rental as r ON r.inventory_id=i.inventory_id
INNER JOIN customer AS c ON c.customer_id=r.customer_id
WHERE c.first_name='Matthew' 
	AND c.last_name='Mahan'
	AND (f.title ILIKE '%boat%' 
	OR f.description ILIKE '%boat%')
	ORDER BY f.replacement_cost DESC
	LIMIT 1 
--Stone Fire	
	