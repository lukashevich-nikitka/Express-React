import React, { useState } from 'react';
import axios from 'axios';

function UserItem(props) {
  const [newName, setNewName] = useState('');
  const [newSurname, setNewSurname] = useState('');
  const [editClick, setEditClick] = useState(true);
  const { name, surname, id } = props;
  const deleteUser = function () {
    axios.delete(`http://localhost:4200/api/getter/delete/${id}`);
  };
  const editUser = function () {
    setEditClick(false);
  };
  const confirmEditUser = function () {
    axios.put(`http://localhost:4200/api/getter/edit/${id}`, {
      newLogin: newName,
      newPassword: newSurname,
    });
    setEditClick(true);
  };
  const rewriteName = (event) => setNewName(event.target.value);
  const rewriteSurname = (event) => setNewSurname(event.target.value);
  if (editClick) {
    return (
      <div className="user-item-wrapper">
        <div className="user-item">
          {name}
          {' '}
          {surname}
        </div>
        <div className="user-buttons">
          <button type="submit" className="user-item-delete-button" onClick={deleteUser}>
            Delete
          </button>
          <button type="submit" className="user-item-update-button" onClick={editUser}>
            Edit
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="user-item-wrapper">
      <div className="edit-input-wrapper">
        <input
          type="text"
          placeholder="Name"
          className="edit-input"
          onChange={rewriteName}
        />
        <input
          type="text"
          placeholder="Surname"
          className="edit-input"
          onChange={rewriteSurname}
        />
      </div>
      <div className="user-buttons">
        <button
          type="submit"
          className="user-item-update-button"
          onClick={confirmEditUser}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default UserItem;
