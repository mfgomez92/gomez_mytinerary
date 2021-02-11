const express= require('express')
const router= express.Router()
//Controladores
const cityController= require('../controllers/cityController')
const activityController= require('../controllers/activityController')
const itineraryController=require('../controllers/itineraryController')
const userController = require('../controllers/userController')
//middleware
const validator = require('../controllers/validator')
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
//Sign Up Sign with Google Sign In 
router.route('/user/signup')
.post(validator.validNewAccount, userController.signUp)
router.route('/user/sign_google')
.post(userController.signGoogle)

router.route('/user/signin')
.post(userController.signIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)

router.route('/comment')
.post(passport.authenticate('jwt', {session: false}),itineraryController.newComment)
.put(passport.authenticate('jwt', {session: false}),itineraryController.deleteComment)

router.route('/comment/update')
.put(passport.authenticate('jwt', {session: false}), itineraryController.updateComment)

router.route('/likes')
.post(passport.authenticate('jwt', {session: false}), itineraryController.like)

router.route('/dislike')
.post(passport.authenticate('jwt', {session: false}),itineraryController.dislike)
module.exports = router

// 



