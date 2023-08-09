const express = require('express');
const app = express();

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
