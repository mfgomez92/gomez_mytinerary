const express= require('express')
const router= express.Router()
//Controladores
const cityController= require('../controllers/cityController')
const activityController= require('../controllers/activityController')
const itineraryController=require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validator = require('../controllers/validator')
//middleware

const passport = require('passport')
require('../config/passport')

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

router.route('/user/signup')
.post(validator.validNewAccount, userController.signUp)

router.route('/user/signin')
.post(userController.signIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)


module.exports= router


