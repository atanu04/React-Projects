import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
function NavBar2() {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>header</h2>
          <button
            className="button-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="icons-container">
          <ul className="icon">
            {social.map((sicon) => {
              return (
                <li key={sicon.id}>
                  <a href={sicon.url}>{sicon.icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
