import React from 'react';
import './style.css';
import { Input } from 'semantic-ui-react';

        


        


function Footer() {
  return (
    <div className="footer">
        <div className="Container1">
            <img src="./assets/logo.svg" alt="" className='logo-with'/>
        </div>

        <div className="footer-container1">

            <div className="first-column">
                <p>First column</p>
                <ul className="menu-column1">
                    <li className="menu-items-footer">First page</li>
                    <li className="menu-items-footer">Second page</li>
                    <li className="menu-items-footer">Third</li>
                    <li className="menu-items-footer">Fourth</li>
                    
                </ul>
            </div>

            <div className="second-column">
                <p>First column</p>
                <ul className="menu-column2">
                    <li className="menu-items-footer">Fifth page</li>
                    <li className="menu-items-footer">Sixth page</li>
                    <li className="menu-items-footer">Eighth</li>                    
                </ul>
            </div>

            <div className="third-column">
                <p>First column</p>
                <ul className="menu-column3">
                    <li className="menu-items-footer">Fifth page</li>
                    <li className="menu-items-footer">Sixth page</li>
                    <li className="menu-items-footer">Eighth</li>                    
                </ul>
            </div>

        </div>

        <div className="subscribe">
            <p className='p1'>Subscribe</p>
            <Input className='input' placeholder='Enter Email' />
            <p className='p2'>Join our newsletter to stay up to date on features and releases</p>
        </div>

    </div>
  );
}

export default Footer;
