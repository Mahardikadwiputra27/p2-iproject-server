


const { decrypt } = require('../helpers/bcrypt')
const { User } = require('../models')
const { accessToken } = require('../helpers/jwt')



class Controller {
    static register = async (req, res, next) => {
        try {

            const { email, password } = req.body
            const input = { email, password }
            const user = await User.create(input)

            res.status(201).json({ id: user.id, email: user.email })
        } catch (err) {
            console.log(err)
            next(err)
        }

    }
    static login = async (req, res, next) => {
        try {
            const { email, password } = req.body

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (user) {
                const isValidPassword = decrypt(password, user.password)
                if (isValidPassword) {
                    const payload = { id: user.id, email: user.email }
                    const generateToken = accessToken(payload)

                    res.status(200).json({ access_token: generateToken, email: user.email, role: user.role, id: user.id })
                } else {
                    throw ({
                        code: 401,
                        name: "Unauthorized",
                        message: "Invalid email or password"
                    })
                }
            } else {
                throw ({
                    code: 401,
                    name: "Unauthorized",
                    message: "Invalid email or password"
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller