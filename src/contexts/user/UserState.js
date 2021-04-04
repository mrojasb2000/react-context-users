import React, { useReducer } from 'react'
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";


const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    // Get user list
    const getUsers = async () => {
        const res =  await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
        
    }
    
    // Get user by profile id
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
    }

    return (
        <UserContext.Provider value={{
                users: state.users,
                selectedUser: state.selectedUser,
                getUsers,
                getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState