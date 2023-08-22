import React from 'react';
import './Menu.scss';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Menu({menuOpen , setmenuOpen}) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setmenuOpen(false)}>
                <a href="#intro">Intro</a>
                {/* <NavLink to ="/intro"  > Intro  </NavLink> */}
            </li>

            <li onClick={()=>setmenuOpen(false)}>
                <a href="#portfolio">Skills</a>
                {/* <NavLink to ="/portfolio"  > Portfolio </NavLink> */}
            </li>

            <li onClick={()=>setmenuOpen(false)}>
                <a href="#work">Work</a>
                {/* <NavLink to ="/work"  > Work  </NavLink> */}
            </li>
            
            {/* <li onClick={()=>setmenuOpen(false)}> */}
                {/* <a href="#testmonials">Testimonials</a> */}
                {/* <NavLink to ="/testmonials"  > Testmonials  </NavLink> */}
            {/* </li> */}
            <li onClick={()=>setmenuOpen(false)}>
                <a href="#contact">Contact</a>
                {/* <NavLink to ="/contact"  > Contact </NavLink> */}
            </li>
            {/* <li onClick={()=>setmenuOpen(false)}> */}
                {/* <a href="#resume">Resume</a>  */}
                {/* <NavLink to ="/resume"  > Resume  </NavLink> */}
            {/* </li> */}
                            
        </ul>

        <ul className='icons'>
            <li>
                <a href="https://www.linkedin.com/in/sunnysingh0007" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            
            </li>
            <li>
                <a href="https://github.com/sunnysingh-9" target="_blank" rel="noreferrer"><FaGithub/></a>
            
            </li>
            <li>
                <a href="mailto: sunnysingh21978@gmail.com" target="_blank" rel="noreferrer"> < MdEmail/></a>
           
            </li>
        </ul>

        
      
    </div>
  )
}