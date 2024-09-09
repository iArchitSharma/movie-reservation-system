const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

// Register a new User [Route handler]
exports.register = async (req, res) => {
    const {username, password} = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({where: {username}});
    if(existingUser){
        return res.status(400).json({ message: 'Username already exist' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json({ message: 'User registered', user });
};

// Login User
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({message: 'Invalid Credentials'});
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({ message: 'Login successful', token });
};