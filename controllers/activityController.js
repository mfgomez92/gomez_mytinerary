const Activity =require('../models/Activity')
 

const ActivityController ={
    newActivity:(req,res)=>{
        const { 
            idCity,
            activityAuthorName,
            activityAuthorPic,
            activityContact,
            activityName,
            activityPic,
            activityDuration,
            activityPrice,
            activityDescription,
            activityCategory}= req.body
        const activityNew= new Activity( {idCity, activityAuthorName,activityAuthorPic,activityContact, activityName, activityPic, activityDuration, activityPrice, activityDescription,activityCategory})

        activityNew.save()
        .then(async activityRecorded => {
            const activityPopulate = await activityRecorded.populate('idCity').execPopulate()
            res.json({success: true, respuesta: activityPopulate})
        })
        .catch(error => res.json({success: false, error}))
    },
    activityId: (req, res) => {
        const {id} = req.params
        Activity.findById(id).populate('idCity')
        .then(activity => res.json({success: true, respuesta: activity}))
        .catch(error => res.json({success: false, error}))
    },
}
module.exports= ActivityController
