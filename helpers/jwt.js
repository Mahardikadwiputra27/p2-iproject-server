const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY


function accessToken(payload) {
    return jwt.sign(payload, secretKey)
}

function accessPayload(token){
    return jwt.verify(token, secretKey)
}
module.exports = { 
    accessToken,
    accessPayload
 }