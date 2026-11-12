--1
SELECT* FROM customer
--2
SELECT 
	CONCAT_WS(' ',first_name,last_name,'') AS full_name
FROM customer 
--3
SELECT DISTINCT create_date 
FROM customer
--4
SELECT * 
FROM customer
ORDER BY first_name DESC
--5
SELECT 
	film_id, 
	title,
	description, 
	release_year,
	rental_rate
FROM film
ORDER BY rental_rate ASC
--6
SELECT address ,phone
FROM address 
WHERE district='Texas'
--7
SELECT *
FROM film
WHERE film_id IN (15,150)
--8
SELECT film_id, title, description, length, rental_rate
FROM film 
WHERE title='Spider Man'
--9
SELECT film_id, title, description, length, rental_rate
FROM film 
WHERE title ILIKE 'sp%'
--10
SELECT 
	title  as cheapest_film ,
	rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10
--11 LIMIT version 
SELECT title, rental_rate
FROM film
ORDER BY rental_rate ASC, title ASC
OFFSET 10
LIMIT 10
--12
SELECT
	c.first_name,
	c.last_name,
	p.amount,
	p.payment_date
FROM payment AS p
JOIN customer AS c ON p.customer_id=c.customer_id
ORDER BY c.customer_id
--13
SELECT f.film_id,f.title
FROM film AS f  
LEFT JOIN inventory AS i  ON i.film_id=f.film_id
WHERE i.film_id IS NULL
--14
SELECT 
	ci.city,
	co.country
FROM country AS co
JOIN city AS ci ON ci.country_id=co.country_id
--15
SELECT 
	c.customer_id,
	c.first_name,
	c.last_name,
	p.amount,
	p.payment_date
FROM payment AS p  
JOIN customer AS c ON p.customer_id=c.customer_id
JOIN staff AS s ON p.staff_id=s.staff_id
ORDER BY s.staff_id 


	
	



