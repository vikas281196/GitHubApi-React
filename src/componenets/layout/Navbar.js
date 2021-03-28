import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { title, icon } = props;
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="" className="brand-logo">
          <i className={icon}></i>{title}
        </a>

        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default Navbar;
