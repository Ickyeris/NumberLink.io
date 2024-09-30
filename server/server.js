const express = require('express');
const bcrypt = require('bcrypt')

const pool = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


async function hashedPassword(password) {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}


app.get('/api/data', (req, res) => {
    res.json({message: "Hello!"});
})

app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
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

app.post('/api/login', async(req, res) => {
  const { username, password } = req.body;
  try {
    // Find user matching the given username
    const result = await pool.query(`SELECT * FROM users WHERE username=$1`, [username]);
    if (result.rows.length === 0){
      return res.status(404).send({message:'User not found!'});
    }

    const user = result.rows[0];


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({message:'Invalid username or password!'})
    }

    // Login succeeded, return user information
    res.status(200).json({
      message: 'Login successfull',
      user: {
        username: user.username
      }
    })
  }
  catch (error) {
    res.status(500).send('User login failed')
  }
});


app.listen(5001, () => console.log('Server running on port 5001'));
