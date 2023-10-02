import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 40,
      strings: ['Web Developer...', 'Web Enthusiast...']
    });
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/sunny-photo.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There , I'm </h2>
          <h1>SUNNY SINGH</h1>
          <h5>
            I'm a Bachelor of Technology student in Computer Science Engineering
            with a wide range of tech skills in various domains like Web
            Development, Cross-platform application development and DSA, with the
            help of this i'm contribution in the innovation of technology in
            world.
          </h5>
          <h3>
            I'm professionally a <span ref={textRef}></span>
          </h3>
          <h4>
            In addition to my academic side I am more align towards startup
            world..
          </h4>
        </div>

        <div>
          <a href="https://drive.google.com/file/d/1MPZ_4CKq2WsZIw6dP-X3QfzVixIT0uHV/view?usp=drive_link"  target="_blank" rel="noreferrer" className="cv" > <button>Download CV</button></a>
        </div>
        <a href="#portfolio">
        <img src="assets/downarrow.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
