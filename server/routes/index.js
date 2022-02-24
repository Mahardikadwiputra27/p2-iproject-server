const router = require("express").Router()
const SearchRoute = require('../routes/seachRoute')

router.use('/search', SearchRoute)

module.exports = router