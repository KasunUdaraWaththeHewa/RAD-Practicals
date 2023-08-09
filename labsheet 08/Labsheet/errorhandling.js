const express = require('express');
const app = express();

app.get('/existing', (req, res) => {
  res.send('This route exists.');
});

app.use((req, res) => {
  res.status(404).send('Custom 404 Page: Route not found');
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
