import React, { useState } from 'react';
import '../../../styles/Registration.css';
import SubmitButton from './SubmitButton';
import Confirm from './Confirm';

function RegistrationInputs() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [click, setClick] = useState(true);
    const setLogin = (event) => setName(event.target.value);
    const setPassword = (event) => setSurname(event.target.value);
    const pushData = () => setClick(false);
    const confirmData = () => setClick(true);
    if (click) {
        return (
            <div className='registration-wrapper'>
        <div className="registration-inputs-wrapper">
            <input type="text" placeholder='Name' className="registration-input" onChange={setLogin}/>
            <input type="text" placeholder='Surname' className="registration-input" onChange={setPassword}/>
        </div>
        <SubmitButton  name={name} surname={surname} pushData={pushData}/>
        </div>
        ) 
    } else {
        return <Confirm confirmData={confirmData}/>
    }
}

export default RegistrationInputs;