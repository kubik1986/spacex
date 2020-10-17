import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

const Header = ({ rockets, changeRocket }) => (
  <header className="header">
    <Link to='/'>
      <img
          src={logo}
          alt="Logo Space X"
          className="logo"
      />
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
        {rockets.map((item, index) => (
          <li key={index} className="item">
          <Link
            to="/rocket" 
            className="item-link"
            onClick={() => {
              changeRocket(item);
            }}>
              {item}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
    <div className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/" className="item-link">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/calendar" className="item-link">Calendar</NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;