const router = require('express').Router()
const HistoryController = require('../controllers/historyController')

router.get('/login', HistoryController.getHistories)

module.exports = router