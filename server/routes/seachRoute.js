const router = require('express').Router()


const UniversityController = require('../controllers/universityController')

router.use('/', UniversityController.findByTitle)