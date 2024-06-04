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
    kilos INTEGER NOT NULL,
    maxNumVoluntarios INTEGER NOT NULL,
    fecha TIMESTAMP NOT NULL,
    localizacion VARCHAR(100) NOT NULL,
    id_agricultor INTEGER,
    FOREIGN KEY (id_agricultor) REFERENCES agricultores(id)
);

CREATE TABLE voluntarios_recolectas (
    id_voluntario INTEGER REFERENCES voluntarios(id),
    id_recolecta INTEGER REFERENCES recolectas(id),
    PRIMARY KEY (id_voluntario, id_recolecta)
);

CREATE TABLE hortalizas (
    id serial PRIMARY KEY,
    hortaliza VARCHAR(100) NOT NULL
);

CREATE TABLE hortalizas_recolectas (
    id_hortaliza INTEGER REFERENCES hortalizas(id),
    id_recolecta INTEGER REFERENCES recolectas(id),
    PRIMARY KEY (id_hortaliza, id_recolecta)
);

/* Seleccionar los id de las recolectas que llegan a maxNumVoluntarios */
SELECT r.id
FROM recolectas r
JOIN (
    SELECT id_recolecta, COUNT(*) AS num_voluntarios
    FROM voluntarios_recolectas
    GROUP BY id_recolecta
) vr ON r.id = vr.id_recolecta
WHERE vr.num_voluntarios = r.maxNumVoluntarios;