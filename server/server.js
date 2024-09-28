const express = require('express');
const bcrypt = require('bcrypt')

const pool = require('./config/db');

const app = express();
app.use(express.json());


async function hashedPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
}


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

app.post('/register', async(req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.json(201).send('User registerd successfully!');
  }
  catch (error) {
    res.status(500).send('Error registering user.')
  }
});


app.listen(5000, () => console.log('Server running on port 5000'));
