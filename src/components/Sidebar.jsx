import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="btn btn-dark d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        aria-label="Open mobile menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Sidebar Offcanvas */}
      <div
        className="offcanvas offcanvas-start bg-dark"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
        role="dialog"
        aria-modal="true"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white" id="offcanvasSidebarLabel">
            MySite
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close menu"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {/* Navigation Items */}
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <Link
                  className="nav-link text-white"
                  to={item.id}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  data-bs-dismiss="offcanvas"
                  role="link"
                  tabIndex="0"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="text-white mt-3" aria-hidden="true">
              |
            </li>

            {/* Phone Number */}
            <li>
              <span
                className="header-call text-white"
                aria-label="Call us at plus one nine seven one two three four one five zero eight"
              >
                <i className="bx bx-phone text-white" aria-hidden="true"></i>
                +1 971 234 1508
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
