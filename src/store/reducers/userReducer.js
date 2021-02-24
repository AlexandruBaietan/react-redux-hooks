import { GET_USERS, USERS_ERROR } from '../types'

const initialState = {
    users: [],
    isLoaded: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                isLoaded: true
            }
        case USERS_ERROR:
            return {
                isLoaded: true,
                error: action.payload
            }
        default:
            return state
    }
}
export default userReducer