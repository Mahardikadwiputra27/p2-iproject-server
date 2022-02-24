const router = require('express').Router()


const UniversityController = require('../controllers/universityController')
router.get('/place', UniversityController.searchLocation)

module.exports = router