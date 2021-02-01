const express= require('express')
const router= express.Router()
const cityController= require('../controllers/cityController')
const activityController= require('../controllers/activityController')
const itineraryController=require('../controllers/itineraryController')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.newCity)

router.route('/cities/:id')
.get(cityController.singleCity)

router.route('/activities')
.post(activityController.newActivity)

router.route('/itineraries')
.post(itineraryController.newItinerary)
router.route('/itineraries/:id')
.get(itineraryController.itinerariesForCity)

module.exports= router