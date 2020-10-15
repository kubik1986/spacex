import React from 'react';
import logo from '../../logo.svg';
import './header.css';

const Header = ({ rockets, changeRocket }) => (
  <header className="header">
    <img
        src={logo}
        alt="Logo Space X"
        className="logo"
    />
    <nav className="main-nav nav">
      <ul className="list">
        {rockets.map((item, index) => (
          <li key={index} className="item">
          <a
            href="/#" 
            className="item-link"
            onClick={evt => {
              evt.preventDefault();
              changeRocket(item);
            }}
            >{item}</a>
        </li>
        ))}
      </ul>
    </nav>
    <div className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/#" className="item-link">Home</a>
        </li>
        <li className="item">
          <a href="calendar.html" className="item-link">Calendar</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;