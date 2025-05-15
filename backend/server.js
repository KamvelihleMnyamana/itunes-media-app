const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const itunesRoute = require('./routes/itunes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/itunes', itunesRoute);

// Catch-all for unknown routes
app.use((req, res) => {
  console.warn(' Unknown route:', req.method, req.originalUrl);
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});