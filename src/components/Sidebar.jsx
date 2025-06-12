import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <>
      <button
        className="btn btn-dark d-lg-none" // Button only visible on smaller screens
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-start bg-dark"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">MySite</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="home" smooth={true} duration={500} activeClass="active" data-bs-dismiss="offcanvas" aria-label="Close">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500} activeClass="active" data-bs-dismiss="offcanvas" aria-label="Close">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500} activeClass="active" data-bs-dismiss="offcanvas" aria-label="Close">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500} activeClass="active" data-bs-dismiss="offcanvas" aria-label="Close">Contact</Link>
            </li>
            <li className='text-white'>|</li>
            <li>
              <span className="header-call">
                <i className='bx bx-phone text-white'></i> +1 971 234 1508
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
