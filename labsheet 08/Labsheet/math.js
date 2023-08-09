const express = require('express');
const app = express();

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
      result = num1 / num2;
      break;
    default:
      res.status(400).send('Invalid operation');
      return;
  }

  res.send(`Result: ${result}`);
});

app.listen(3004, () => {
  console.log('Server is running on port 3004');
});
