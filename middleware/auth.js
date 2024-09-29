
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model'); 

const authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);  // Debugging the decoded token
    
    // Find user by id instead of username
    const user = await User.findOne({ where: { id: decoded.id } });
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; // Attach the authenticated user to the request
    next();
  } catch (error) {
    console.error("JWT verification error:", error); 
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};


module.exports = authenticate;
