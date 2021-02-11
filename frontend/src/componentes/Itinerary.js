import { Carousel, Button} from "react-bootstrap";
import Rating from '@material-ui/core/Rating';
import {BiMoney, BiHeart, BiPaperPlane} from 'react-icons/bi'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import likeActions from "../redux/actions/likeActions"
import commentActions from "../redux/actions/commentActions"
import Comment from './Comment'
import { IconContext } from "react-icons"
import swal from 'sweetalert2'



const Itinerary= (props) =>{
    //Desestructuracion de las props
    //props.itinerary me llegan del componente padre Itineraries
    const {itineraryActivity, itineraryName,itineraryCommentary, itineraryPrice, itineraryDuration, itineraryDescription,itineraryCategory, _id, idCity}= props.itinerary
    //mostrar/ocultar los comentarios
    const [visible, setVisible] = useState(true)
    const [reload, setReload] = useState(false)

    //guardar el contenido del comentario
    let [newComment, setNewComment] = useState({})
    //funcion para ir cargando el contenido del comentario a la const newComment a traves del setNewComment
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewComment({ ...newComment,[name]: value })
      }
    //funcion para enviar a la base de datos el comentario
    const sendComment = async (e) => {
        //aplico un condicional para evitar mandar comentarios vacios
        if (newComment===""){
            swal.fire("Fill in all fields")
                return false
        }
        //props.newComment es un accion q hace un pedido de tipo post al endpoint http://localhost:4000/comment', pasa como headers el token q sera verificado por passport, luego pasa por commentController.newComment
        // este controlador va a utlilizar el id q pasó la accion para buscar dentro de la collecion itinerary el itinerario correspondiente y lo va a actualizar utilizzando un operador de mongo  llamado $push. este operador agrega al array de comentarios, un objeto con las propiedades de : username, profilePicture y comment. Al tratarse de un objeto nuevo, mongo automaticamente le agrega un _id.
        await props.newComment(newComment.comment,props.loggedUser.token,_id)
        //seteo nuevamente a comment para que el value del input este vavio y vualva aparecer el placeholder
        setNewComment=('')
        setReload(!reload)


      }

      const [liked, setLiked] = useState('')
      useEffect(()=> {
        if(props.loggedUser){
          setLiked(props.loggedUser.username)
          
        }
      },[reload])
      const addLike =()=> {
        props.like(props.itinerary._id, props.loggedUser.token)
        setReload(!reload)


      }
      const dislike =()=> {
         props.dislike(props.itinerary._id, props.loggedUser.token)
         setReload(!reload)

      }
    return (
        <>
           <div className="row justify-content-center p-5 mx-auto ">
                <div className="col-4">
                    {/* {itinerary Activity es un array de objeto que posee todas las actividades  del itinerario } */}
                    <Carousel fade={true} controls={false} indicators={false}>
                        {itineraryActivity.map(({activityName, activityPic, index})=>(
                            <Carousel.Item>
                                <div key={index} className="foto_carrusel m-2" 
                                style={{backgroundImage: `url(${activityPic})`}}>
                                    <p>{activityName}</p>
                                </div>
                            </Carousel.Item>    
                                ))}
                    </Carousel>
                </div>
                <div className="col-4 p-5 d-flex flex-column ">
                    <div className="d-flex justify-content-between border-bottom align-items-center">
                        <h1 className="font-weight-bold">{itineraryName}</h1>
                        <div>
                            <Rating name="primary" icon={<BiMoney/>} name="read-only" value={itineraryPrice} readOnly size="large" emptyIcon={<BiMoney/>} />
                            <p className="h5">{`Estimated Duration ${itineraryDuration}hs.`}</p>
                        </div>
                      {props.itinerary.itineraryLike.includes(liked)?                        
                        <Button variant="secondary" className="btn-mz rounded-circle d-flex justify-content-center align-items-center" onClick={props.loggedUser && dislike} >
                            <BiHeart/><p>{props.itinerary.itineraryLike.length}</p>
                        </Button>
                      :     
                        <Button variant="primary" className="btn-mz rounded-circle"  onClick={props.loggedUser ? addLike : ()=> swal.fire('You have to be logged to like it')}  >
                            <BiHeart/><p>{props.itinerary.itineraryLike.length}</p>
                        </Button>}
                    </div>
                    <p className="h3 mt-3">{itineraryDescription}</p>
                    <div className="d-flex">
                        {itineraryCategory.map(category=>{
                            return <p className="h4 bg-secondary m-2 p-1 rounded text-white">#{category}</p>})}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mx-auto ">
                <div className="col-8 pb-3 border-bottom border-secondary ">
                {!visible && (
                    <div>
                        {itineraryCommentary.length ===0?<p className="admin_input rounded-pill text-center bg-light mx-auto">Be first to comment</p> : 
                        
                        itineraryCommentary.map((comment, index) => {
                        return <Comment key={index} comment={comment} id={_id} />}) }
                        <div className="d-flex justify-content-center">
                            <input type="text" name="comment" autoComplete="off" className="admin_input"
                            placeholder={!props.loggedUser ?
                                 "You need to be logged to comment!" :
                                 "Leave your comment"} 
                            value={newComment.comment} disabled={!props.loggedUser && true}
                            onChange={(e)=> handleChange(e)}/>
                            <IconContext.Provider value={{size:'3em'}}>
                                <BiPaperPlane type="submit" id={props.itinerary._id} 
                                onClick={props.loggedUser ?()=> sendComment() :()=> swal.fire('You must be logged to send a comment')}/>
                            </IconContext.Provider>
                        </div>                    
                    </div>
                    )
                }
                    <Button variant="secondary" className="btn-mz m-auto" onClick={()=> setVisible(!visible)}>
                        {!visible? "View Less": "See all Comments"  }
                    </Button>
                </div>
            </div>
                         
        </>
    )
    }
    const mapStateToProps = state => {
        return {
          loggedUser: state.authReducer.loggedUser,
          comment: state.commentReducer.comment
        }
      }
    const mapDispatchToProps = {
        newComment: commentActions.newComment,
        like: likeActions.like,
        dislike: likeActions.dislike
    }
export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)




 