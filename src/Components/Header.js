import React from 'react';
import logo from '../../src/Images/logo.png'

const Header = () => {
    return (
      <header className='header'>
       <img src={logo} alt='Breaking Bad'/>;
      </header>
    )
}

export default Header;