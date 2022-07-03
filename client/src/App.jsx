import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';

function Registration() {
  useEffect(() => {
    axios.post('http://localhost:4200/api/getter/registration', {login: "Lukashevich", password: "Nikita"}).then(res => console.log(res));
  })
  return (
    <h1>Test</h1>
  );
}

export default Registration;
