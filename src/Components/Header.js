
import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>My E-Commerce Store</h1>
      <div className="header-cart">
        Cart: {cartCount} items
      </div>
    </header>
  );
};

export default Header;
