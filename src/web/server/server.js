// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const app = express();
// const port = 3000;

// const pool = new Pool({
//     user: 'sd',
//     host: 'localhost',
//     database: 'sd',
//     password: 'sd',
//     port: 5432,
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Rota para registro de usuários
// app.post('/', async (req, res) => {
//     const { username, password } = req.body;
//     const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';

//     try {
//         const result = await pool.query(query, [username, password]);
//         res.json(result.rows[0]);
//     } catch (error) {
//         res.status(500).json({ error: 'Erro no servidor' });
//     }
// });

// // Rota para login de usuários
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';

//     try {
//         const result = await pool.query(query, [username, password]);
//         if (result.rows.length === 1) {
//             res.json({ message: 'Login bem-sucedido' });
//         } else {
//             res.status(401).json({ error: 'Credenciais inválidas' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Erro no servidor' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });
