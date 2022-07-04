import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RegistrationInputs from './pages/registration/components/RegistrationInputs';
import FriendsList from './pages/friends_list/components/friends_page';
import './styles/App.css';

function App() {
  return (
    <>
    <header>
      <nav>
        <ul className='nav-list'>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/friends">Friends</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/registration" element={<RegistrationInputs />} />
      <Route path="/friends" element={<FriendsList />} />
    </Routes>
    </>
  );
}

export default App ;
