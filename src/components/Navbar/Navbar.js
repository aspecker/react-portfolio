import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props =>(
    <header>
    <nav className="nav">
      <ul>
      
        <li className="home">
            <Link to = '/' 
            className= {
                window.location.pathname=== '/'
                ? 'active'
                : ''}> Home </Link> 
        </li>
        <li className="portfolio">
            <Link to = '/portfolio' className = {
                window.location.pathname === '/portfolio'
                ? 'active'
                : ''
            }>Portfolio </Link>
        </li>
        <li className="contact">
            <Link to = '/contact'
             className = {
                window.location.pathname === '/contact'
                ? 'active'
                : ''
            }> Contact</Link>
        </li>
      </ul>
      
    </nav>
  </header>
)

export default Navbar;