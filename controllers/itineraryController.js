const Itinerary =require('../models/itinerary')
 

const itineraryController ={
    newItinerary:(req,res)=>{
        const {idCity,itineraryAuthorName,itineraryAuthorPic,itineraryAuthorContact,
            itineraryName,itineraryDescription,itineraryPrice,itineraryDuration,
            itineraryCategory,itineraryActivity}= req.body
        const itineraryNew= new Itinerary( {idCity, itineraryAuthorName, itineraryAuthorPic, itineraryAuthorContact,
            itineraryName, itineraryDescription,itineraryPrice, itineraryDuration,itineraryCategory,itineraryActivity})
        itineraryNew.save()
        .then(async itineraryRecorded => {
            const itineraryPopulate = await itineraryRecorded.populate('idCity').execPopulate()
            res.json({success: true, respuesta: itineraryPopulate})
        })
        .catch(error => res.json({success: false, error}))
    },
    itinerariesForCity:async (req, res)=>{
        
        const id = req.params.id
         await Itinerary.find({idCity: id})
        .then(resultado => res.json({success:true, response: resultado}))
        .catch(error=> res.json({success:false, error:error}))
             
     }
}
module.exports= itineraryController
