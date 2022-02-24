const { accessPayload, accessToken } = require("../helpers/jwt.js")
const { User } = require('../models')

const authentication = async (req, res, next) => {

    try {
        const token = req.headers.access_token
        if (!token) {
            throw ({ code: 401, name: "Unauthorized", message: 'Please Login First' })
        }
        const payload = accessPayload(token)
        const user = await User.findByPk(payload.id)
        if (!user) {

            throw { code: 401, name: "Unauthorized", message: "Invalid User" }
        }

        req.session = {
            id: user.id,
            email: user.email,
        }

        next()

    } catch (err) {
        next(err)
    }

}

module.exports = authentication