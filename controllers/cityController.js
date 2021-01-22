const City =require('../models/City')


const cityController ={
    //se puede usar el async await, pero en este caso es mejor el then para despus poder capturar el error
    newCity:(req,res)=>{
        const {cityCode,cityName,countryName,imgCity,titleSV,streetView,flag}= req.body
        const cityNew= new City( {
            cityCode:cityCode,
            cityName:cityName,
            countryName:countryName,
            imgCity:imgCity,
            titleSV:titleSV,
            streetView:streetView,
            flag:flag
        })
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

    singleCity:(req, res)=>{
        //Devuelve una sola ciudad
        const cityCode = req.params.cityCode
        City.findOne({cityCode:cityCode})
        .then(resultado => res.json({success:true, response: resultado}))
        .catch(error=> res.json({success:false, error:error}))
    }
}
module.exports= cityController








