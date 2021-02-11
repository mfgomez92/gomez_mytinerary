const Itinerary =require('../models/itinerary')
 
const itineraryController ={
    newItinerary:(req,res)=>{
        const {idCity,itineraryAuthorName,itineraryAuthorPic,
            itineraryName,itineraryDescription,itineraryPrice,itineraryDuration,
            itineraryCategory,itineraryActivity}= req.body
        const itineraryNew= new Itinerary( {idCity, itineraryAuthorName, itineraryAuthorPic, 
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
             
     },
    newComment: (req,res) => {
    const {id, comment}= req.body
    const {profilePicture,username, name}= req.user
        Itinerary.findOneAndUpdate(
        {_id: id},
        {$push: {itineraryCommentary: {
            name,
            commentaryAuthor: username,
            commentaryPic : profilePicture, 
            commentaryDescription: comment}}},
        {new: true}
        )
        .then(comment => res.json({success: true, response: comment}))
        .catch(error => res.json({success: false, error}))
    },
    updateComment: (req, res) => {
      console.log(req.body)
        const commentId = req.body.idComment
        const itineraryId= req.body.idItinerary
        Itinerary.findOneAndUpdate(
          {_id: itineraryId, 'itineraryCommentary._id': commentId}, 
          {$set: {'itineraryCommentary.$.commentaryDescription': req.body.comment}},
          {new: true}
        )
        .then(data => res.json({success: true, response: data}))
        .catch(error => res.json({success: false, error}))
      },
   
      deleteComment: (req, res) => {
        const idComment = req.body.idComment
        const idItinerary = req.body.idItinerary
        Itinerary.findOneAndUpdate(
          {_id: idItinerary},
          {$pull: {itineraryCommentary: {_id: idComment}}},
          {new: true}
        )
        .then(data => res.json({success: true, response:data}))
        .catch(error => res.json({success: false, error}))
      },
      like: async (req, res) => {
        console.log(req.user)
        const itineraryId = req.body.id
        const userId = req.user.username
    
        await Itinerary.findOneAndUpdate(
          {_id: itineraryId},
          {$addToSet: {itineraryLike: userId}},
          {new: true}
        )
        .then(like => {res.json({success:true, response: like})})
        .catch(error => res.json({success: false, error}))
      },
    
      dislike: (req, res) => {
        console.log(req.user)
        Itinerary.findOneAndUpdate(
          {_id: req.body.id},
          {$pull: {itineraryLike: req.user.username}},
          {new: true}
        )
        .then(dislike => {res.json({success: true, response: dislike})})
        .catch(error => res.json({succes: false, error}))
      }
}
module.exports= itineraryController
