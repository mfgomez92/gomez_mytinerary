const Itinerary =require('../models/itinerary')


const itineraryController ={
    newItinerary:(req,res)=>{
        const {}= req.body
        const itineraryNew= new Itinerary( {idCity, itineraryAuthor, itineraryName, itineraryPic, itineraryDuration, itineraryPrice, itineraryDescription,itineraryCategory})
         itineraryNew.save()
         .then(itineraryNew=> {
             return res.json({success: true , response: itineraryNew})
         })
         .catch(error => {
             return res.json({success: false, error: error})
         } )
    }
}
module.exports= itineraryController
