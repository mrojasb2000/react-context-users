import React, { useEffect } from "react";
import {useContext} from "react";
import UserContext from "../contexts/user/UserContext";

const Profile = (props) => {

    const { getProfile } = useContext(UserContext)

    useEffect(() => {
        getProfile(props.id);
    })

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile