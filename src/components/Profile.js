import React, { useContext } from "react";
import UserContext from "../contexts/user/UserContext";

const Profile = () => {

    const { selectedUser } = useContext(UserContext)

    return (
       <>
        {selectedUser ? (<div></div>): (<h1>User not selected</h1>)}
       </>
    )
}

export default Profile