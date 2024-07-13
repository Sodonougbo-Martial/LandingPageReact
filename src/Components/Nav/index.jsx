import React from 'react';
import './style.css';

function Nav() {
  return (
    <header className="header">
        <div className="Container1">
            <img src="./assets/Logo (Black).png" alt="" />
        </div>
        <ul className="menu">
            <li className="menu-items">Link 1</li>
            <li className="menu-items">Link 2</li>
            <li className="menu-items">Link 3</li>
            <li className="menu-items">Link 4</li>
            <li className="menu-items">Link 5</li>
        </ul>

        <button className="btn">Action</button>

    </header>
  );
}

export default Nav;
