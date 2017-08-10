import React from 'react';
import { Link } from 'react-router'
import custom from '../css/custom.css';

const NavDrawerList = () => (
    <div>
      <ul className={custom.sidebarNav}>
        <li className={custom.sidebarBrand}>
          <a href="#">
            <img src={require('../images/logo.png')} alt ="logo" className={custom.logo} />
          </a>
        </li>
        <li>
          <a href="#" style={{"width":"100%", "display":"block"}}>PRODUCTS<i className="fa fa-plus right" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#">FEATURES<i className="fa fa-plus" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#">TEMPLATES<i className="fa fa-plus" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#">COMPONENTS<i className="fa fa-plus" aria-hidden="true"></i></a>
        </li>
        <li>
          <Link to="/basic" activeClassName="active">BASICS<i className="fa fa-plus" aria-hidden="true"></i></Link>
        </li>
        <li>
          <Link to="/reportsui" activeClassName="active">Reports UI<i className="fa fa-plus" aria-hidden="true"></i></Link>
        </li>
      </ul>
    </div>
);

export default NavDrawerList;
