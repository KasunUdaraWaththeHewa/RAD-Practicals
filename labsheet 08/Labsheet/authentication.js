const express = require('express');
const app = express();

const validCredentials = {
  username: 'admin',
  password: 'secret',
};

app.get('/login', (req, res) => {
  const { username, password } = req.query;

  if (username === validCredentials.username && password === validCredentials.password) {
    res.send('Welcome, authenticated user!');
  } else {
    res.send('Authentication failed.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
