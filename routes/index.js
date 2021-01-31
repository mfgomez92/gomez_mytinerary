const express= require('express')
const router= express.Router()
const cityController= require('../controllers/cityController')
const activityController= require('../controllers/activityController')
const itineraryController=require('../controllers/itineraryController')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.newCity)

router.route('/activities')
.post(activityController.newActivity)

router.route('/itineraries')
.post(itineraryController.newItinerary)


module.exports= router