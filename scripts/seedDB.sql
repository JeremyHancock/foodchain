CREATE DATABASE foodchain_db;

USE foodchain_db;

CREATE TABLE Consumer
(
id INT AUTO_INCREMENT UNIQUE,
user_name varchar(45) UNIQUE,
user_password BINARY(40),
person_name varchar(45),
email varchar(100) UNIQUE,
phone_number varchar(13),
PRIMARY KEY (id)
)