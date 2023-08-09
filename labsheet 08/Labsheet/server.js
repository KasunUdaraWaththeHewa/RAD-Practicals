const express = require("express");
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

//problem 2
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send(`Name: ${name}<br>Email: ${email}<br>Password: ${password}`);
});


//problem 1
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

//problem 3
const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
  ];
  
  app.get('/api/books', (req, res) => {
    res.json(books);
  });


//problem 4
const validUsername = 'user';
const validPassword = 'password';

app.get('/login', (req, res) => {
  const { username, password } = req.query;

  if (username === validUsername && password === validPassword) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Authentication failed');
  }
});


//problem 5
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/404.html');
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


const port=3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});