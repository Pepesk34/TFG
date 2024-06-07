import express from 'express' //importar express
import pg from 'pg';
import cors from 'cors';
import bcrypt from 'bcrypt'
const PORT = 3001;

const app = express()


app.use(cors());
app.use(express.json());

// Configura la conexión
const db = new pg.Client({
    user: 'postgres',         
    host: 'localhost',          
    database: 'greenboydhousedb', 
    password: '8569',           
    port: 5432,                
});

db.connect();

app.post("/registrarV", async (req, res) => {

    console.log("Entra en /registrarV");
    //Obtenemos datos del cuerpo de la solicitud
    const { nombre, apellidos, dni, telefono, email, contraseña } = req.body;

    const hashedPasswordVoluntario = await bcrypt.hash(contraseña, 10);
    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1 OR dni = $2", [email, dni]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un voluntario con ese email o DNI");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO voluntarios(nombre, apellidos, dni, telefono, email, contraseña) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [nombre, apellidos, dni, telefono, email, hashedPasswordVoluntario]
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
    const hashedPasswordAgricultor = await bcrypt.hash(contraseña, 10);

    try {
        // Comprobamos si el voluntario ya existe por su email
        const comprobacion = await db.query("SELECT * FROM agricultores WHERE email = $1 OR dni = $2", [email, dni]);

        if (comprobacion.rows.length > 0) {
            res.status(400).send("Ya existe un agricultor con ese email o DNI");
        } else {
            // Insertamos el voluntario
            const nuevoAgricultor = await db.query(
                "INSERT INTO agricultores(nombre, apellidos, dni, telefono, email, contraseña) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [nombre, apellidos, dni, telefono, email, hashedPasswordAgricultor]
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
    const { kilos, maxNumVoluntarios, fecha, localizacion, idAgricultor, hortalizas } = req.body;

    try {
        // Comprobamos si el voluntario ya existe por su email
        // const comprobacion = await db.query("SELECT * FROM voluntarios WHERE email = $1 OR dni = $2", [email, dni]);

        // if (comprobacion.rows.length > 0) {
        //     res.status(400).send("Ya existe un voluntario con ese email o DNI");
        // } else {
        // Insertamos el voluntario

        const idHortalizas = (await db.query(
            "SELECT id FROM hortalizas WHERE hortaliza = ANY($1::text[])",
            [hortalizas]
        )).rows.map(row => row.id)

        const values = idHortalizas.map((_, index) => `($${index + 1}, $${idHortalizas.length + 1})`).join(", ");
        console.log(values)

        const nuevaRecolecta = await db.query(
            "INSERT INTO recolectas(kilos, maxnumvoluntarios, fecha, localizacion, id_agricultor) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [kilos, maxNumVoluntarios, fecha, localizacion, idAgricultor]
        );

        const idRecolecta = nuevaRecolecta.rows[0].id;
        console.log("idrecolecta " + idRecolecta)

        // Crear el array de parámetros para la consulta
        const queryParams = [...idHortalizas, idRecolecta];

        const hortalizasRecolecta = await db.query(
            `INSERT INTO hortalizas_recolectas (id_hortaliza, id_recolecta) 
            VALUES ${values}`, queryParams
        );

        res.status(201).json(nuevaRecolecta);
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

app.get('/deleteVoluntarioRecolecta', async (req, res) => {
    console.log("Entra en deleteVoluntarioRecolecta")

    const userId = req.query.userId; // Obtén el userId de los parámetros de consulta
    const recolectaId = req.query.recolectaId;
    try {
        const result = await db.query(
            `DELETE FROM voluntarios_recolectas
            WHERE id_voluntario = $1 AND id_recolecta = $2;`,
            [userId, recolectaId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Error deleteVoluntarioRecolecta " + err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/deleteRecolecta', async (req, res) => {
    console.log("Entra en deleteRecolecta")

    const recolectaId = req.query.recolectaId;
    try {

        const resultHortalizasRecolectas = await db.query(
            "DELETE FROM hortalizas_recolectas WHERE id_recolecta = $1", 
            [recolectaId]
        );
        const result = await db.query(
            `DELETE FROM voluntarios_recolectas
            WHERE id_recolecta = $1;`,
            [recolectaId]
        );
        const resultRecolectas = await db.query(
            "DELETE FROM recolectas WHERE id= $1;",
            [recolectaId]
        );
        
        res.json({resultHortalizasRecolectas, result, resultRecolectas});
    } catch (err) {
        console.error("Error deleteRecolecta " + err.message);
        res.status(500).send('Server Error');
    }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { email, password, rol } = req.body;

    // Aquí deberías obtener la contraseña hasheada de la base de datos basada en el email
    const tabla = rol === 'A' ? 'agricultores' : 'voluntarios'


    try {
        const filaUsuario = await db.query(
            `SELECT * FROM ${tabla} WHERE email = $1`, [email]
        )
        console.log(filaUsuario);
        if(filaUsuario.rows.length > 0) {
            const hashedPassword = filaUsuario.rows[0].contraseña // Implementa esta función

        if (!hashedPassword) {
            return res.status(401).json({ message: 'Credenciales inválidas, email no registrado' });
        }
        // Comparar la contraseña ingresada con la contraseña hasheada en la base de datos
        const match = await bcrypt.compare(password, hashedPassword);

        if (match) {
            // Crear una cookie de sesión
            // const sessionId = generateSessionId(); // Esta función genera un ID de sesión único
            // res.cookie('sessionId', sessionId, {
            //   maxAge: 24 * 60 * 60 * 1000, // Expira en 1 día
            //   httpOnly: true,
            //   secure: true,
            //   sameSite: 'strict'
            // });

            res.status(200).json({ filaUsuario: filaUsuario.rows[0], rol: rol });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
        } else {
            console.log("Usuario no registrado");
            res.status(401).json({message: "Usuario no registrado"});
        }
        
    } catch (error) {
        console.error('Error al comparar contraseñas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

//Iniciamos el servidor en el puerto 3001
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})