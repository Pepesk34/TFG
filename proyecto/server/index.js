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
    password: '1234',            // reemplaza con tu contraseña
    port: 5432,                 // puerto donde corre PostgreSQL
});

db.connect();

app.post("/registrarV", async (req, res) => {

    console.log("Entra en /registrarV");
    //Obtenemos datos del cuerpo de la solicitud
    const { nombre, apellidos, dni, telefono, email, contraseña } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1 OR dni = $2", [email, dni]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un voluntario con ese email o DNI");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO voluntarios(nombre, apellidos, dni, telefono, email, contraseña) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [nombre, apellidos, dni, telefono, email, contraseña]
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
    const { nombre, apellidos, dni, telefono, email, contraseña } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM agricultores WHERE email = $1 OR dni = $2", [email, dni]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un agricultor con ese email o DNI");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO agricultores(nombre, apellidos, dni, telefono, email, contraseña) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [nombre, apellidos, dni, telefono, email, contraseña]
            );

            res.status(201).json(nuevoAgricultor.rows[0]);
        }
    } catch (error) {
        console.error('Error al registrar el agricultor:', error);
        res.status(500).send("Error al registrar el agricultor");
    }
});

app.post("/addRecolecta", async (req, res) => {

    console.log("Entra en /addRecolecta");
    //Obtenemos datos del cuerpo de la solicitud
    const { kilos, maxNumVoluntarios, fecha, localizacion, idAgricultor } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        // const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1 OR dni = $2", [email, dni]);

        // if (comprobacion.rows.length > 0) {
        //     res.status(400).send("Ya existe un voluntario con ese email o DNI");
        // } else {
            // Insertamos el voluntario
            const nuevaRecolecta = await db.query(
                "INSERT INTO recolectas(kilos, maxnumvoluntarios, fecha, localizacion, id_agricultor) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                [kilos, maxNumVoluntarios, fecha, localizacion, idAgricultor]
            );

            res.status(201).json(nuevaRecolecta.rows[0]);
        // }
    } catch (error) {
        console.error('Error al añadir recolecta:', error);
        res.status(500).send("Error al añadir recolecta");
    }
});

app.get('/selectRecolectas', async (req, res) => {
    console.log("Entra en selectRecolectas")
    try {
        const result = await db.query(`
        SELECT 
            r.*, 
            STRING_AGG(h.hortaliza, ', ') AS hortalizas
        FROM 
            recolectas r 
        JOIN 
            hortalizas_recolectas hr 
            ON r.id = hr.id_recolecta 
        JOIN 
            hortalizas h 
            ON hr.id_hortaliza = h.id
        GROUP BY 
            r.id;
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

app.get('/selectRecolectasCompletas', async (req, res) => {
    console.log("Entra en selectRecolectasCompletas");
    try {
        const result = await db.query(`
      SELECT r.id
        FROM recolectas r
        JOIN (
            SELECT id_recolecta, COUNT(*) AS num_voluntarios
            FROM voluntarios_recolectas
            GROUP BY id_recolecta
        ) vr ON r.id = vr.id_recolecta
        WHERE vr.num_voluntarios >= r.maxNumVoluntarios
      `);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/selectAgricultor', async (req, res) => {
    console.log("Entra en selectAgricultor")

    const agricultorId = req.query.agricultorId; // Obtén el userId de los parámetros de consulta
    try {
        const result = await db.query(
            `SELECT * FROM agricultores WHERE id=$1`,
            [agricultorId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Error selectAgricultor: " + err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/addVoluntarioRecolecta', async (req, res) => {
    console.log("Entra en addVoluntarioRecolecta")

    const userId = req.query.userId; // Obtén el userId de los parámetros de consulta
    const recolectaId = req.query.recolectaId;

    try {
        const result = await db.query(
            `INSERT INTO voluntarios_recolectas (id_voluntario, id_recolecta) VALUES ($1, $2)`,
            [userId, recolectaId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Error addVoluntarioRecolecta " + err.message);
        res.status(500).send('Server Error');
    }
});

//Iniciamos el servidor en el puerto 3001
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})