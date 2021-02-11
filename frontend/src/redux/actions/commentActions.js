import axios from "axios"
import swal from 'sweetalert2'

const commentActions = {
    newComment: (comment, token, id) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.post('http://localhost:4000/comment', {comment, id} , {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            console.log(response)
            dispatch({type: 'NEW_COMMENT', payload: response.data})
            //alert avisando q se envio un nuevo comentario
            swal.fire({
              icon: 'success',
              text: 'Comment send',
              timer: 1500,
              position: 'bottom-end'
            })
            return true
          }
          catch(error){
            //alert avisando q hubo un error
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              timer: 1500,
              position: 'bottom-end'
            })
          }
        }
      },
      updateComment: (comment, idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('http://localhost:4000/comment/update', {comment, idComment, idItinerary, token}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'UPDATE_COMMENT', action: response.data})
          }
          catch(error){
            console.log(error)
          }
        }
      },
    
      deleteComment: (idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('http://localhost:4000/comment', {idComment, idItinerary, token}, {
              headers: {
                Authorization: 'Bearer '+ token
              }
            })
            console.log(response)
            dispatch({type: 'DELETE_COMMENT', payload: response.data})
          }
          catch(error){
            console.log(error)
          }
        }
      }

}

export default commentActions