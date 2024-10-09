import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={vhLogo} alt="Ver Hoef Logo"/>
          </div>
          {(!isLogin) &&       
            <ul className="navbar-links">
              <li><Link to="/">Inventory</Link></li>
              <li><Link to="/new">New</Link></li>
              <li><Link to="/used">Used</Link></li>
              <li><Link to="/sold">Sold</Link></li>
              <li><Link to="/team">Team</Link></li>
            </ul>
          }
          <div className="navbar-person-logo">
            <img src={personLogo}/>
          </div>
        </nav>
    );
}

export default NavBar;