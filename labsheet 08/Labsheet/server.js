const express = require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send(`Name: ${name}<br>Email: ${email}<br>Password: ${password}`);
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
  ];
  
  app.get('/api/books', (req, res) => {
    res.json(books);
  });

const port=3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});