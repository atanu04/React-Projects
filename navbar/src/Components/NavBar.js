import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
function NavBar() {
  const [showlinks, setShowlinks] = useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
      linksContainerRef.current.style.overflow = "hidden";
    }
  }, [showlinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>header</h2>
          <button
            className="nav-toggle"
            onClick={() => setShowlinks(!showlinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="link-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
