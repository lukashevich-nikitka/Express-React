import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './components/user_item';
import '../../styles/Users.css';

function FriendsList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4200/api/getter/users')
      .then((res) => setUsers([...res.data]));
  });
  return (
    <div className="users-wrapper">
      {[...users].map((_, index) => (
        <UserItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          name={users[index].login}
          surname={users[index].password}
          id={index}
        />
      ))}
    </div>
  );
}

export default FriendsList;
