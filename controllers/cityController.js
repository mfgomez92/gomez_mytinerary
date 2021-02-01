const City =require('../models/City')
const Activity = require('../models/Activity')

const cityController ={
    //se puede usar el async await, pero en este caso es mejor el then para despus poder capturar el error
    newCity:(req,res)=>{
        const {cityCode,cityName,countryName,imgCity,titleSV,streetView,flag}= req.body
        const cityNew= new City( {cityCode, cityName, countryName, imgCity, titleSV, streetView, flag})
        cityNew.save()
        .then(cityNew=> {
            return res.json({success: true , response: cityNew})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        } )
    },

    allCities:(req, res)=>{
        //devuelve todas las ciudades
        City.find()
        .then(data =>{
            return res.json({ success:true,response:data})
        })
        .catch(error =>{
            return res.json({ success:false, error:error})
        })
    },

    singleCity:async (req, res)=>{
        
        const id = req.params.id
        const activities = await Activity.find({idCity: id})
        
        if (activities.length === 0 ) {
            City.findOne({_id:id})
            .then(resultado => res.json({success:true, response: resultado, activities:null}))
            .catch(error=> res.json({success:false, error:error}))
        } else {
            City.findOne({_id:id})
            .then(resultado => res.json({success:true, response: resultado,activities:activities}))
            .catch(error=> res.json({success:false, error:error}))
        } 
     }
}

module.exports= cityController








