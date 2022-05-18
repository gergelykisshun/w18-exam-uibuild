import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <header>
      <h1>New York Times best sellers</h1>
      <MenuIcon className="book-menu"/>
    </header>
  )
}

export default Header;