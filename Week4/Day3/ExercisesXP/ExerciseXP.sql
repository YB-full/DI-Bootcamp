CREATE TABLE items(
item_id SERIAL PRIMARY KEY,
name_item VARCHAR (100) NOT NULL,
price NUMERIC(10, 2) NOT NULL
)

CREATE TABLE customers(
item_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR(100) NOT NULL
)

INSERT INTO items(name_item,price)
VALUES ('Small Desk',100)

INSERT INTO items(name_item,price)
VALUES ('Large desk',300)

INSERT INTO items(name_item,price)
VALUES ('Fan',80)


INSERT INTO customers(first_name,last_name)
VALUES ('Greg','Jones')

INSERT INTO customers(first_name,last_name)
VALUES ('Sandra','Jones')

INSERT INTO customers(first_name,last_name)
VALUES ('Scott','Scott')

INSERT INTO customers(first_name,last_name)
VALUES ('Trevor','Green')

INSERT INTO customers(first_name,last_name)
VALUES ('Melanie','Johnson')

SELECT* FROM items

SELECT * FROM items 
WHERE price>80

SELECT * FROM items 
WHERE price<=300

SELECT * FROM customers 
WHERE last_name='Smith'

SELECT * FROM customers
WHERE last_name='Jones'

SELECT * FROM customers 
WHERE last_name!='Scott'


