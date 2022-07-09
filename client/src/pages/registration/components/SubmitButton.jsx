import React from 'react';
import axios from 'axios';

function SubmitButton(props) {
  const {
    name, surname, id, setUserId, pushData,
  } = props;

  const saveData = function () {
    setUserId();
    axios
      .post(`http://localhost:4200/api/getter/registration/${id}`, {
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
