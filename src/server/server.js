const express = require('express');
const pool = require('./config/db');



const app = express();
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({message: "Hello!"});
})


app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tab1');
      res.json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});


app.listen(5000, () => console.log('Server running on port 5000'));
