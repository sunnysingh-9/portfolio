import React from 'react'
import './Footer.scss';
import { FaCode, FaLinkedin, FaGithub, FaMailchimp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb_footer footer-section">
            <div className="footer-link">
                <div className="footer-link-div">
                    <h4>For Services</h4>
                    <a href='/'>
                        <p>Web Development</p>
                    </a>
                    <a href='/'>
                        <p>Designing</p>
                    </a>
                    <a href='/'>
                        <p>Software Development</p>
                    </a>
                </div>
                <div className="footer-link-div">
                    <h4>Resources</h4>
                    <a href='/'>
                        <p>Testimonials</p>
                    </a>
                    <a href='/'>
                        <p>Notes</p>
                    </a>
                    <a href='/'>
                        <p></p>
                    </a>
                </div>
                <div className="footer-link-div">
                    <h4>Contact Me</h4>
                    <a href='/'>
                        <p>sunnysingh21978@gmail.com</p>
                    </a>
                    <a href='/'>
                        <p>+91-9318397671</p>
                    </a>
                </div>
                <div className="footer-link-div">
                    <h4>Company</h4>
                    <a href="#portfolio">
                        <p>Skills</p>
                    </a>
                    <a href="#work">
                        <p>Work</p>
                    </a>
                    <a href="#contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="footer-link-div">
                    <h4>Connect With Me</h4>
                    <div className="socialmedia">
                        <a href="https://www.linkedin.com/in/sunnysingh0007" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                        <a href="https://github.com/sunnysingh-9" target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href="mailto: sunnysingh21978@gmail.com" target="_blank" rel="noreferrer"> <FaMailchimp/></a>
                        <a href="https://leetcode.com/sunnysingh7/" target="_blank" rel="noreferrer"><FaCode/></a>
                    </div>
                </div>                
            </div>
            <hr />
            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Sunny. All right reserved.
                    </p>
                    </div>
                    <div className="footer-below-link">
                        <a href="/"><div><p>Terms & Condition</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>      
        </div>
  )
}

export default Footer
