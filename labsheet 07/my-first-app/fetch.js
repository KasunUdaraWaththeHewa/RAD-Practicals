const axios = require('axios');

async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await axios.get(url);
    console.log('Response:');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
  }
}
fetchData();
