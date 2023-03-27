const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config()
const SECRET = process.env.SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.newToken
        console.log("here")
        const  decodeData = await jwt.verify(token, SECRET)
        console.log(decodeData);
        next()

    } catch (error) {
       
        console.log(error)
    }
}

module.exports = auth