const router = require('express').Router()


const UniversityController = require('../controllers/universityController')

// router.get('/country', UniversityController.findByCountry)
// router.get('/name', UniversityController.findByName)
router.get('/place', UniversityController.searchLocation)

module.exports = router