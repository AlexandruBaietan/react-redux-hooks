import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../store/actions/userAction'

const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.userList)
    const {isLoaded, error, users} = usersList
    useEffect(() => {
        console.log(usersList)
        dispatch(getUsers()) 
      }, [dispatch])
    return (
        <>
            {isLoaded ? users.map(u => <h3>{u.name}</h3>)  : error ? error.message : "Loading..."}
        </>
    )
}

export default Users