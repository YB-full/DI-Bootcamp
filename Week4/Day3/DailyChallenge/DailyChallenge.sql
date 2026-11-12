SELECT COUNT(*) as total_actors
FROM actors

INSERT INTO actors(first_name, last_name,birth_date,number_oscars)
VALUES (NULL,NULL,NULL,NULL)
-- will bring an error because we define our colums as NOT NULL