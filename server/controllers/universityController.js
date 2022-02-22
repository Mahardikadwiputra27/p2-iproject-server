

const { university } = require('../apis/univeristy')

class Controller {
    static findByTitle = async (req, res, next) => {
        try {
            const result = university.findAll({
                where = {
                    title = {
                        [Op.iLike]: `%${req.query.title}%`
                    }
                }
            })
        } catch (err) {

        }

    }
}