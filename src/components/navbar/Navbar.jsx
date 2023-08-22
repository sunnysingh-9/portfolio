import React  from 'react';
import "./Navbar.scss";

export default function Navbar({menuOpen ,setmenuOpen}) {

  return (
    <div className={"navbar " +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SUNNY SINGH</a>
          <div className="itemcontainer">
            <span>+91-9318397671</span>
          </div>
          <div className="itemcontainer">
            <span>sunnysingh21978@gmail.com</span>
          </div>
        </div>

    

        <div className="right">
       <div className="humburger" onClick={()=>setmenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
       </div>
        </div>
      </div>
    </div>
  );
}
