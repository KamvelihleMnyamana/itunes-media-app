const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT tokens for protected routes.
 * Checks for a valid token in the Authorization header.
 */
module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is present and properly formatted
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.warn('No token provided');
    return res.status(401).json({ error: 'Authorization token missing or malformed' });
  }

  // Extract the token from the header
  const token = authHeader.split(' ')[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user data to the request object
    req.user = decoded;

    // Move on to the next middleware or route handler
    next();
  } catch (err) {
    // Token is invalid or expired
    console.warn('Invalid or expired token');
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};