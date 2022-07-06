import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserItem from "../user_item";

function FriendsList() {
    const [users, SetUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4200/api/getter/users').then((res) => SetUsers([...res.data]), [])
    })
    return (
        <div className="users-wrapper">
            {[...users].map((_, index) => <UserItem key={index} name={users[index].login} surname={users[index].password}/>)}
        </div>
    )
}

export default FriendsList;