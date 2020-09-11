import React from 'react';

import './Header.css';
import Logo from '../../assets/GitHub-Mark-Light-32px.png';
import Form from './Form';

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <img src={Logo} alt="GitHub Logo" />
        <Form />
      </div>
    </header>
  );
}

export default Header;
