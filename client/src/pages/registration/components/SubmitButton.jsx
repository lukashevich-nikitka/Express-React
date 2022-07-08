import React from 'react';
import axios from 'axios';

function SubmitButton(props) {
  const { name, surname, pushData } = props;
  const saveData = function () {
    axios
      .post('http://localhost:4200/api/getter/registration', {
        login: name,
        password: surname,
      })
      .then(pushData);
  };
  return (
    <button type="submit" className="submit-button" onClick={saveData}>
      Add new User
    </button>
  );
}

export default SubmitButton;
