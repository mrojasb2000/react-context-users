import React, { useEffect } from "react";
import {useContext} from "react";
import UserContext from "../contexts/user/UserContext";


const UserList = () => {

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers();
    })

    return (
        <div>
            <div className="list-group h-100">
                {
                    users.map(user => (
                        <a className="list-group-item list-group-item-action" href="#!" key={user.id}>{user.first_name} {user.last_name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList