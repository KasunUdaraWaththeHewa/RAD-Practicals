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

//problem 6node
app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;
  
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          return res.status(400).send('Division by zero is not allowed');
        }
        break;
      default:
        return res.status(400).send('Invalid operation');
    }
  
    res.send(`Result: ${result}`);
  });

const port=3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});