const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.table(row);
  })
  .on('end', () => {
    console.log('CSV file has been processed.');
  });
