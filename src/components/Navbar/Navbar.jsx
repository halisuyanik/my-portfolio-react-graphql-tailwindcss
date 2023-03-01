import React, {useState} from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {Link, Route} from 'react-router-dom';

function Navbar(){
  const [currentRoute, setCurrentRoute] = useState("home");
  
   const handleCurrentRoute=async(route)=>{
    setCurrentRoute(route);
    console.log(currentRoute);
  }

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name"></div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li  style={{cursor: "none"}}>
              <Link to="/" onClick={(e)=>handleCurrentRoute("home")}>Home</Link>
            </li>
           
            
            <li style={{cursor: "none"}}>
           <Link to="/Works" onClick={(e)=>handleCurrentRoute("works")}>Works</Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;