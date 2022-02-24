const router = require('express').Router()
const HistoryController = require('../controllers/historyController')

router.get('/', HistoryController.getHistories)

module.exports = router