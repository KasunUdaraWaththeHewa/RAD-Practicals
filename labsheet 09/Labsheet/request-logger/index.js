const express = require('express');
const path = require('path');
const authenticationMiddleware = require('./authMiddleware');
const requestLoggerMiddleware = require('./requestLoggerMiddleware');

const app = express();
const port = 3000;

app.use(requestLoggerMiddleware);
app.use(authenticationMiddleware);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/image/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'images', filename));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
