const jwt = require("jsonwebtoken")

const generateToken = (data) => {
  
    return jwt.sign(data, process.env.SECRET_PASSWORD, { expiresIn: '2h' })
}

const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, "Irene123456")

}
module.exports={generateToken, verifyToken};