import { combineReducers } from 'redux'
import CityReducer from './cityReducer'
import searchReducer from './searchReducer'
import userReducer from './userReducer'

// combineReducers合并多个reducer

const rootReducer = combineReducers({
    city:CityReducer,
    keyword:searchReducer,
    user:userReducer
})

export default rootReducer;
