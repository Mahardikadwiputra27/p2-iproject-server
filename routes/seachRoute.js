const router = require('express').Router()
const SearchController = require('../controllers/searchController')

router.get('/place', SearchController.searchLocation)

module.exports = router