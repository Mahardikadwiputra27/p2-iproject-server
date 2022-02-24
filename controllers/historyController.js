const { History } = require('../models')



class Controller {
    static getHistories = async (req, res, next) => {
        try {
            const history = await History.findAll()
            res.status(201).json(history)
        } catch (err) {
            next(err)
        }
    }

}

module.exports = Controller