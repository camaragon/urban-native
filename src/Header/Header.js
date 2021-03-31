import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({user}) {
  return (
    <header className="site-header">
      <h1 className='app-name'>Urban Native</h1>
      <p className='welcome'>Welcome, {user.first_name}</p>
      <article className="buttons">
        <Link to={`/info`} aria-label="more-info">
          <button className="header-button">
            REGIONAL GROWING INFO
          </button>
        </Link>
      </article>
    </header>
  )
}

export default Header;
