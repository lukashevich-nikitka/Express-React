/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import '../../styles/Registration.css';
import axios from 'axios';
import SubmitButton from './components/SubmitButton';
import Confirm from './components/Confirm';

function RegistrationInputs() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState({ userId: 1 });
  const [click, setClick] = useState(true);
  const setLogin = (event) => setName(event.target.value);
  const setPassword = (event) => setSurname(event.target.value);
  useEffect(() => {
    axios.get('http://localhost:4200/api/getter/users').then((res) => {
      if (res.data.length > 0) {
        setId({ userId: +(res.data[res.data.length - 1].id) + 1 });
      } else {
        setId(id);
      }
    });
  }, []);
  const setUserId = function () {
    setId({ userId: id.userId + 1 });
  };
  const pushData = () => setClick(false);
  const confirmData = () => setClick(true);
  if (click) {
    return (
      <div className="registration-wrapper">
        <div className="registration-inputs-wrapper">
          <input
            type="text"
            placeholder="Name"
            className="registration-input"
            onChange={setLogin}
          />
          <input
            type="text"
            placeholder="Surname"
            className="registration-input"
            onChange={setPassword}
          />
        </div>
        <SubmitButton
          name={name}
          surname={surname}
          setUserId={setUserId}
          id={id.userId}
          pushData={pushData}
        />
      </div>
    );
  }
  return <Confirm confirmData={confirmData} />;
}

export default RegistrationInputs;
