/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './components/user_item';
import '../../styles/Users.css';

function FriendsList() {
  const [users, setUsers] = useState([]);
  const renderUserList = function () {
    axios
      .get('http://localhost:4200/api/getter/users')
      .then((res) => setUsers([...res.data]));
  };
  useEffect(renderUserList, []);
  return (
    <div className="users-wrapper">
      {[...users].map((_, index) => (
        <UserItem
          key={users[index].id}
          name={users[index].login}
          surname={users[index].password}
          id={users[index].id}
          renderUserList={renderUserList}
        />
      ))}
    </div>
  );
}

export default FriendsList;
