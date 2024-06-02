CREATE DATABASE `greenboydhousedb`;
USE greenboydhousedb;

CREATE TABLE agricultores (
    id serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) unique NOT NULL,
    email varchar(100) unique NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE voluntarios (
    id serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) unique NOT NULL,
    email varchar(100) unique NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

/*
CREATE TABLE usuarios (
    id serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(9) unique NOT NULL,
    email varchar(100) unique NOT NULL
    contraseña VARCHAR(100) NOT NULL,
    rol CHAR(1) NOT NULL
);
*/

CREATE TABLE recolectas (
    id serial PRIMARY KEY,
    localizacion VARCHAR(100) NOT NULL,
    kilos INTEGER NOT NULL,
    fecha TIMESTAMP NOT NULL,
    id_agricultor INTEGER REFERENCES agricultores(id) UNIQUE
);

CREATE TABLE voluntarios_recolectas (
    id_voluntario INTEGER REFERENCES voluntarios(id),
    id_recolecta INTEGER REFERENCES recolectas(id),
    PRIMARY KEY (id_voluntario, id_recolecta)
)