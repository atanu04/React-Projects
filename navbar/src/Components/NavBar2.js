import React from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
function NavBar2() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>header</h2>
          <button>
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="icons-container">
          <ul className="icon">
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
