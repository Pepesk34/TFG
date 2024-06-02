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

db.connect();

app.post("/registrarV", async (req, res) => {

    console.log("Entra en /registrarV");
    //Obtenemos datos del cuerpo de la solicitud
    const { nombre, apellidos, dni, email, contraseña } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1", [email]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un voluntario con este email");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO voluntarios(nombre, apellidos, dni, email, contraseña) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [nombre, apellidos, dni, email, contraseña]
            );

            res.status(201).json(nuevoAgricultor.rows[0]);
        }
    } catch (error) {
        console.error('Error al registrar el voluntario:', error);
        res.status(500).send("Error al registrar el voluntario");
    }
});

app.post("/registrarA", async (req, res) => {

    console.log("Entra en /registrarA");
    //Obtenemos datos del cuerpo de la solicitud
    const { nombre, apellidos, dni, email, contraseña } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM agricultores WHERE email = $1", [email]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un agricultor con este email");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO agricultores(nombre, apellidos, dni, email, contraseña) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [nombre, apellidos, dni, email, contraseña]
            );

            res.status(201).json(nuevoAgricultor.rows[0]);
        }
    } catch (error) {
        console.error('Error al registrar el agricultor:', error);
        res.status(500).send("Error al registrar el agricultor");
    }
});

app.get('/selectRecolectas', async (req, res) => {
    console.log("Entra en selectRecolectas")
    try {
      const result = await db.query(`
        SELECT *
        FROM recolectas
      `);
  
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

app.get('/selectRecolectasUsuario', async (req, res) => {
    console.log("Entra en selectRecolectasUsuario")

    const userId = req.query.userId; // Obtén el userId de los parámetros de consulta
    try {
        const result = await db.query(
            `SELECT r.*
            FROM voluntarios_recolectas vr
            JOIN voluntarios v ON vr.id_voluntario = v.id
            JOIN recolectas r ON vr.id_recolecta = r.id
            WHERE v.id = $1`,
            [userId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//Iniciamos el servidor en el puerto 3001
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})