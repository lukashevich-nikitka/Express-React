import React from "react";
import axios from "axios";

function UserItem(props) {
    const { name, surname, id } = props;
    const deleteUser = function() {
        axios.delete(`http://localhost:4200/api/getter/delete/${id}`)
    }
    return (
        <>
        <div className="user-item-wrapper">
        <div className="user-item">{name} {surname}</div>
        <div className="user-buttons">
            {/* СДЕЛАЙ ПЕРЕЗАПИСЬ БАЗЫ ДАННЫХ ПОСЛЕ УДАЛЕНИЯ ПОЛЬЗОВАТЕЛЯ */}
        <button className="user-item-delete-button" onClick={deleteUser}>Delete</button>
        <button className="user-item-update-button">Update</button>
        </div>
        </div>
        </>
    )
}

export default UserItem;