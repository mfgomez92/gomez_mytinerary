import {createStore, combineReducers, applyMiddleware}  from 'redux'
import thunk  from 'redux-thunk'
import {citiesReducer} from './reducers/citiesReducer'
import {authReducer} from './reducers/authReducer'
import {commentReducer} from './reducers/commentReducer'
import {likeReducer} from './reducers/likeReducer'
const reducer = combineReducers({
    citiesReducer,
    authReducer, 
    commentReducer,
    likeReducer
})

const store= createStore(reducer, applyMiddleware(thunk))
export default store