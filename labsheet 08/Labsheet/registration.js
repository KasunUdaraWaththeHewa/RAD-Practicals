const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/registration', (req, res) => {
  const { name, email, password } = req.body;
  res.send(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});
