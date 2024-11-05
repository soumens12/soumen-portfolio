import React from 'react';
// Importing Link from react-scroll for smooth scrolling to sections
import { Link } from 'react-scroll';
import Sidebar from './Sidebar';
import logo from '../images/logo.png';

function Header() {
  return (
    <nav className="navbar navbar-dark fixed-top my-header">
      <div className="container">
        <Link className="navbar-brand" to="home" smooth={true} duration={500}>
          <img src={logo} alt="Logo" />
        </Link>
        
        {/* Add Sidebar for mobile view */}
        <Sidebar />

        {/* Regular navbar menu visible on larger screens */}
        <div className="d-none d-lg-flex">
          <ul className="navbar-nav me-auto d-flex flex-row gap-4 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500} spy={true} activeClass="active" offset={-70}>Contact</Link>
            </li>
            <li className='text-white'>|</li>
            <li>
              <span className="header-call">
                <i className='bx bx-phone text-white'></i> +91 891 081 8490
              </span> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
