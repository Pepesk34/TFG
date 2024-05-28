import express from 'express' //importar express
import pg from 'pg';
import cors from 'cors';

const app = express()


app.use(cors());
app.use(express.json()); 

// Configura la conexión
const db = new pg.Client({
    user: 'postgres',         // reemplaza con tu usuario de PostgreSQL
    host: 'localhost',          // dirección del servidor PostgreSQL
    database: 'greenboydhousedb', // reemplaza con el nombre de tu base de datos
    password: '8569',            // reemplaza con tu contraseña
    port: 5432,                 // puerto donde corre PostgreSQL
});

//definimos la ruta para manejar las solicitudes post

db.connect();

app.post("/create", (req, res)=> {

    console.log("entra en create");
    //Obtenemos datos del cuerpo de la solicitud
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const dni = req.body.dni;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;

    //consulta sql
    db.query(
        "INSERT INTO agricultores(nombre, apellidos, dni, usuario, contraseña) VALUES ($1, $2, $3, $4, $5)",
        [nombre, apellidos, dni, usuario, contraseña],
        (err, result) => {
            if (err) {
                console.log('Error al hacer el insert' + err);
                res.status(500).send("Error al registrar el agricultor");
            } else {
                res.send("Registro completado con exito")
            }
        }
    );
});

app.post("/create1", (req, res)=> {

    console.log("entra en create1");
    //Obtenemos datos del cuerpo de la solicitud
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const dni = req.body.dni;
    const matricula = req.body.matricula
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;

    //consulta sql
    db.query(
        "INSERT INTO voluntarios(nombre, apellidos, dni, matricula, usuario, contraseña) VALUES ($1, $2, $3, $4, $5, $6)",
        [nombre, apellidos, dni, matricula, usuario, contraseña],
        (err, result) => {
            if (err) {
                console.log('Error al hacer el insert' + err);
                res.status(500).send("Error al registrar el voluntario");
            } else {
                res.send("Registro completado con exito")
            }
        }
    );
});


 //Iniciamos el servidor en el puerto 3001
 app.listen(3001, ()=>{
    console.log("Corriendo en el servidor 3001");
 })