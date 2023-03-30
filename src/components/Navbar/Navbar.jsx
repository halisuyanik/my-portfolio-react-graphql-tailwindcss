import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';

export const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Works",
    path: "/Works"
  }
]

function Navbar() {
  const location = useLocation();

  return (
    <div className="n-wrapper " id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name"></div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {links.map((link) => (
              <li className={location.pathname === link.path ? "text-[#111827] dark:text-[#42b883] border-[#111827] dark:border-[#42b883] border-b-2   " : "  hover:text-text[] hover:underline underline-offset-8 "} key={link.path} style={{ cursor: "none" }}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;