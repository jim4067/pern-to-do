const cors = require('cors');
const express = require('express');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
        const all_todos = await pool.query('SELECT * FROM todo');
        res.json(all_todos.rows)
    } catch (err) {
        console.error("ahh shit ...", err.message);
    }
});

app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const single_todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

        res.json(single_todo.rows);
    } catch (err) {
        console.error("ahhh shit...", err.message);
    }
});

app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const new_todo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

        res.json(new_todo.rows[0]);
    } catch (err) {
        console.error("ahh shit...", err.message);
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const update_todo = await pool.query('UPDATE todo SET description = $1 WHERE  todo_id = $2 RETURNING *', [description, id]);

        res.json(update_todo.rows[0]);
    } catch (err) {
        console.error("ahh shit...", err.message);
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(`DELETE FROM todo WHERE todo_id=${id}`);
        res.status(204).end();
    } catch (err) {
        console.error("ahh shit....", err.message);
    }
});

const PORT = 3040;
app.listen(PORT, () => {
    console.log(`running server on port ${PORT}`);
});

//the dolar sign represents a variable holder