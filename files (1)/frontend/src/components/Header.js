import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;