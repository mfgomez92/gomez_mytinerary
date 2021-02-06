const City =require('../models/City')
const Activity = require('../models/Activity')
const path= require('path')


const cityController ={
    //se puede usar el async await, pero en este caso es mejor el then para despus poder capturar el error
    // newCity:(uploader.single('file') ,async (req,res)=>{
    //     const {files, body} = req
    //     console.log(files, body)
    //     if(file && body){
    //         const cityNew = new City({
    //             cityCode: body.cityCode,
    //             cityName: body.cityName,
    //             countryName: body.countryName,
    //             imgCity:`frontend/public/assets/${file.filename}`,
    //             titleSV: body.titleSV,
    //             streetView: body.streetView,
    //             flag: body.flag
    //         })
    //         cityNew.save()
    //         .then(cityNew=> {
    //                  return res.json({success: true , response: cityNew})
    //              })
    //              .catch(error => {
    //                  return res.json({success: false, error: error})
    //              } )
    //     }
    // }),
    newCity: (req,res)=>{ 
        if(req.files ===null ){
            return res.status(400).json({response: "error"})
        }
        const file= req.files.file
        file.mv(path.join(__dirname, '../frontend/algo/'+ file.name), error=>{
            if(error){
                return res.json({response:error})
            }
            res.json({response:"ok"})
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








