const express = require("express"); //importar express
const app = express()
const mysql = require("mysql"); //importamos mysql
const cors = require("cors");

app.use(cors());
app.use(express.json());
//Creamos conexión a la bd
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"greenboydhousedb"
});

//definimos la ruta para manejar las solicitudes post
app.post("/create",(req,res)=>{

    //Obtenemos datos del cuerpo de la solicitud
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const dni = req.body.dni;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;

    //consulta sql
    db.query(
        "INSERT INTO agricultores(nombre, apellidos, dni, usuario, contraseña) VALUES (?, ?, ?, ?, ?)",
        [nombre, apellidos, dni, usuario, contraseña],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar el agricultor");
            } else {
                res.send("Registrado con éxito el agricultor");
            }
        }
    );
});

 //Iniciamos el servidor en el puerto 3001
 app.listen(3001, ()=>{
    console.log("Corriendo en el servidor 3001");
 })