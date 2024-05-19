CREATE DATABASE `greenboydhousedb`;
USE greenboydhousedb;

CREATE TABLE agricultores (
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);