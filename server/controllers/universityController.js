

const { university } = require('../apis/univeristy')

class Controller {
    static findByCountry = async (req, res, next) => {
        try {
            const {county} = req.query
            const result = await university.get(`search?county=${county}`)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    static findByName= async (req, res, next) => {
        try {
            const {name} = req.query
            const result = await university.get(`search?name=${name}`)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}



module.exports = Controller