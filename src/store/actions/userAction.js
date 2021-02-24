import { GET_USERS, USERS_ERROR } from '../types'

export const getUsers = () => async dispatch => {

    try {
        const res = await fetch(`http://jsonplaceholder.typicode.com/users`)
        const data = await res.json()
        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: error,
        })
    }

}