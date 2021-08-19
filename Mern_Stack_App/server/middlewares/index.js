const User = require('../models/user');
const jwt = require('jsonwebtoken');

const checkSignin = async (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ message: "unautorized" });

    try {
        const payload = jwt.verify(token, process.env.TOKEN_SECRET);
        const { username } = payload;
        const user = await User.findOne({ username });
        req.user = user;
        next()
    } catch (err) {
        console.log(err)
    }
};

module.exports = checkSignin;