import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../contexts/user/UserContext";


const UserList = () => {

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers();
        console.log(users);
    })

    return (
        <div>
            <div className="list-group h-100">
                {
                    users.map(user => (
                        <a className="list-group-item list-group-item-action" href="#!" key={user.id}>
                            <img src={user.avatar} className="img-fluid mr-4 rounded-circle width=70" alt="avatar"/>
                            <p>
                                {user.first_name} {user.last_name}
                            </p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList