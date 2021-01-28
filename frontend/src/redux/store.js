import {createStore, combineReducers, applyMiddleware}  from 'redux'
import thunk  from 'redux-thunk'
import {citiesReducer} from './reducers/citiesReducer'

const reducer = combineReducers({
    citiesReducer
})

const store= createStore(reducer, applyMiddleware(thunk))
export default store