import express from 'express' //importar express
import pg from 'pg';
import cors from 'cors';
const PORT = 3001;

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

app.post("/createAgricultor", (req, res) => {

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

app.post("/registrarVoluntario", async (req, res) => {

    console.log("Entra en /registrarVoluntario");
    //Obtenemos datos del cuerpo de la solicitud
    const { nombre, apellidos, dni, email, contraseña } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1", [email]);
        
        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un voluntario con este email");
        } else {
            // Insertamos el voluntario
            const nuevoVoluntario = await db.query(
                "INSERT INTO voluntarios(nombre, apellidos, dni, email, contraseña) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [nombre, apellidos, dni, email, contraseña]
            );
            
            res.status(201).json(nuevoVoluntario.rows[0]);
        }
    } catch (error) {
        console.error('Error al registrar el voluntario:', error);
        res.status(500).send("Error al registrar el voluntario");
    }
});


//Iniciamos el servidor en el puerto 3001
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})