


const errorHandler = (err, req, res, next) => {
    let errors
    console.log(err)
    switch (err.name) {
        case "Unauthorized":
            res.status(err.code || 401).json({ message: err.message })
            break;
        case "SequelizeUniqueConstraintError":
            errors = err.errors.map((err) => err.message)
            res.status(err.code || 400).json({ message: errors })
            break;
        case "ValidationErrorItem":
            errors = err.errors.map((err) => err.message)
            res.status(err.code || 400).json({ message: errors })
            break;
        case "SequelizeValidationError":
            errors = err.errors.map((err) => err.message)
            res.status(err.code || 400).json({ message: errors })
            break;
        case "SequelizeForeignKeyConstraintError":
            res.status(err.code || 404).json({ message: "error not found" })
            break;
        case "Forbidden Access":
            res.status(err.code).json({ message: err.message })
            break;
        default:
            res.status(500).json({ message: "Internal Server Error" })
            break;
    }


}


module.exports = errorHandler