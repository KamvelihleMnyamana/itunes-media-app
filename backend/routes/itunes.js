const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * @route   GET /api/itunes/search
 * @desc    Search media from iTunes API based on user input
 * @access  Public
 */
router.get('/search', async (req, res) => {
  const { term, media } = req.query;

  // Log the received search query
  console.log('Search received:', { term, media });

  // Validate required query parameters
  if (!term || !media) {
    return res.status(400).json({ error: 'Search term and media type are required' });
  }

  try {
    // Make request to iTunes Search API
    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term,       // Search keyword
        media,      // Media type (e.g., music, movie, etc.)
        limit: 20   // Limit number of results
      }
    });

    // Log and return successful results
    console.log(` ${response.data.results.length} results sent`);
    res.json(response.data);
  } catch (error) {
    // Handle different types of errors
    console.error(' iTunes API error:', error.message);

    // Error response from iTunes API
    if (error.response) {
      console.log(' Response data:', error.response.data);
      return res.status(error.response.status).json({
        error: 'iTunes API responded with an error',
        details: error.response.data
      });
    } 
    // No response received from the server
    else if (error.request) {
      return res.status(500).json({ error: 'No response from iTunes API' });
    } 
    // Other request setup errors
    else {
      return res.status(500).json({ error: 'Request error', message: error.message });
    }
  }
});

module.exports = router;