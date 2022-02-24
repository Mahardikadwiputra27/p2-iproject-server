const router = require("express").Router()
const SearchRoute = require('../routes/seachRoute')
const UserRoute = require('../routes/userRoute')
const HistoryRoute = require('../routes/historyRoute')
const authentication = require('../middlewares/auth')

router.use('/user', UserRoute)
router.use(authentication)
router.use('/search', SearchRoute)
router.use('/history', HistoryRoute)

module.exports = router