const initialState = {
    comment: null
  }
  
  export function commentReducer  (state = initialState, action) {
    switch(action.type){
      case 'NEW_COMMENT':
        return {
          ...state,
          comment: action.payload
        }
      case 'UPDATE_COMMENT':
        return{
          ...state,
          comment: action.payload
        }
      case 'DELETE_COMMENT':
        return{
          ...state
        }
      default:
      return state
    }
  }
  
