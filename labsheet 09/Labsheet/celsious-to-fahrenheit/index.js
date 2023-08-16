const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send('Invalid input');
});

app.get('/convert', (req, res, next) => {
  const celsius = parseFloat(req.query.celsius);

  if (isNaN(celsius)) {
    return next(new Error('Invalid input'));
  }

  const fahrenheit = (celsius * 9/5) + 32;

  let feedback;
  if (fahrenheit < 32) {
    feedback = 'Freezing';
  } else if (fahrenheit < 50) {
    feedback = 'Cool';
  } else if (fahrenheit < 80) {
    feedback = 'Warm';
  } else {
    feedback = 'Hot';
  }

  res.send(`Celsius: ${celsius}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F, Feedback: ${feedback}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
