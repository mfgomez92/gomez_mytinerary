import {createStore, combineReducers, applyMiddleware}  from 'redux'
import thunk  from 'redux-thunk'
import {citiesReducer} from './reducers/citiesReducer'
import {authReducer} from './reducers/authReducer'
const reducer = combineReducers({
    citiesReducer,
    authReducer
})

const store= createStore(reducer, applyMiddleware(thunk))
export default store