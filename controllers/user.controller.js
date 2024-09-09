const { User } = require('../models/user.model');

//Get all users
exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

// Promote user to admin
exports.promoteToAdmin = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.role = 'admin';
  await user.save();
  
  res.json({ message: `User ${user.username} promoted to admin` });
};