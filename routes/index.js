const express= require('express')
const router= express.Router()
const cityController= require('../controllers/cityController')



router.route('/cities')
.get(cityController.allCities)

router.route('/cities/:cityName')
.get(cityController.singleCity)


module.exports= router