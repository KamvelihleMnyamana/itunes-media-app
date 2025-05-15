const axios = require('axios');

// Send a GET request to the iTunes Search API
axios.get('https://itunes.apple.com/search', {
  params: {
    term: 'adele',     // Search term
    media: 'music',    // Media type to search (e.g., music, movie, etc.)
    limit: 5           // Limit the number of results to 5
  }
})
.then(res => {
  // Success response: log number of results found
  console.log('✅ Success:', res.data.results.length, 'results found');
})
.catch(err => {
  // Handle errors during the API request
  console.error('Failed to fetch from iTunes API');

  if (err.response) {
    // Server responded with a status code out of 2xx range
    console.log('Status:', err.response.status);
    console.log('Data:', err.response.data);
  } else if (err.request) {
    // Request was sent but no response received
    console.log('No response received. Possibly a network issue.');
  } else {
    // Something went wrong setting up the request
    console.log('Error:', err.message);
  }
});