const router = require('express').Router()


const UniversityController = require('../controllers/universityController')

router.use('/country', UniversityController.findByCountry)
router.use('/name', UniversityController.findByName)