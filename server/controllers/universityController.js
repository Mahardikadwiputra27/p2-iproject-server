

const { university } = require('../apis/univeristy')

class Controller {
    static findByTitle = async (req, res, next) => {
        try {
            const {title} = req.query
            const result = await university.get(`search?title=${title}`)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}



module.exports = Controller