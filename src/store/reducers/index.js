import { combineReducers } from 'redux'
import userReducer from './userReducer'

export default combineReducers({
    userList: userReducer,
})