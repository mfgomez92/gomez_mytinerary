const express= require('express')
const router= express.Router()
const cityController= require('../controllers/cityController')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.newCity)

router.route('/cities/:cityCode')
.get(cityController.singleCity)


module.exports= router