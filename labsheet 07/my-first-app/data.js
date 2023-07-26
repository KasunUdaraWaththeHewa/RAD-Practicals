const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log('Name:', jsonData.name);
    console.log('Age:', jsonData.age);
  } catch (error) {
    console.error('Error parsing JSON:', error.message);
  }
});
