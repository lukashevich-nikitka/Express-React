import React from "react";
import '../../styles/Users.css'

function UserItem(props) {
    return (
        <>
        <div className="user-item-wrapper">
        <div className="user-item">{props.name}</div>
        <div className="user-item">{props.surname}</div>
        <button className="user-item-button"></button>
        <button className="user-item-update"></button>
        </div>
        </>
    )
}

export default UserItem;