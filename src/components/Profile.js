import React, { useContext } from "react";
import UserContext from "../contexts/user/UserContext";

const Profile = () => {

    const { selectedUser } = useContext(UserContext)

    return (
       <>
        {selectedUser ? (<div>
            <img src={selectedUser.avatar} alt="avatar" />
            <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
        </div>): (<h1>User not selected</h1>)}
       </>
    )
}

export default Profile