CREATE DATABASE `greenboydhousedb`;
USE greenboydhousedb;

CREATE TABLE agricultores (
    id INT(10) serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) unique NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE voluntarios (
    id INT(10) serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) unique NOT NULL,
    matricula VARCHAR(20) unique NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);