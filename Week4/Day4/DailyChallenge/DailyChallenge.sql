CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
;
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
;
SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);


SELECT * FROM SecondTab;

--Q1
--the result will be 0 because select of null is null 
-- and not in null is not true so retrieve no lines
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN
	( SELECT id FROM SecondTab WHERE id IS NULL )
--Q2
--will return 2 because there are 2 lines with id!=5 
--beside null wich is not counted
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab WHERE id = 5 )
--Q3
--will be 3 because there are 3 lines beside null
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN 
( SELECT id FROM SecondTab )
--return 0 becaue in the inner select we have null that can t be compared 
--Q4
--will return 2 because 5 is in the 2 tables and null is not compared
SELECT COUNT(*) 
FROM FirstTab AS ft
WHERE ft.id NOT IN
( SELECT id FROM SecondTab WHERE id IS NOT NULL )







	
