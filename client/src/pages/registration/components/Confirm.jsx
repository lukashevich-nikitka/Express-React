import React from 'react';

function Confirm(props) {
    const { confirmData } = props;
    return (
        <div className='confirm-wrapper'>
            <div className='confirm-text'>Succes</div>
            <button className='confirm-button' onClick={confirmData}>Continue</button>
        </div>
    )
}

export default Confirm;