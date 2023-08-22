import React from 'react';
import './Work.scss';

export default function Work() {
  return (
    <div className='work1' id='work'>
       <div className="topbar">WORK</div>
       <div className="section">

      <div className="row1">

      <div className="columb1">
        <h4><a href="https://github.com/sunnysingh-9/todoapp" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Todo-App</a></h4>
       <img src="assets/to-do-list-apps.png" alt="todolist"/>
       </div>

        <div className="columb1">
            <h4><a href="https://github.com/sunnysingh-9/flappy-bird" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Flappy Bird</a></h4>
            <img src="assets/download.jpg" alt="flappy bird"/>
        </div>

       


        <div className="columb1">
        <h4><a href="https://github.com/sunnysingh-9/News-app" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>News-App </a></h4>
        <img src="assets/download3.jpg" alt="news-app"/>
        </div>
        
        </div>
        <div className="row1">

        <div className="columb1">
        <h4><a href="https://github.com/sunnysingh-9/Text-utility" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Text-Utils</a></h4>
        <img src="assets/textutils.png" alt="Textutils"/>
        </div>

        <div className="columb1">
        <h4><a href="https://github.com/sunnysingh-9/Googlenotes" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Google Notes</a></h4>
        <img src="assets/googlenotes.jpg" alt="Google Notes"/>
        </div>

        <div className="columb1">
        <h4><a href="https://github.com/sunnysingh-9/Project-sol" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Project-Sol</a></h4>
        <img src="assets/download4.png" alt="Projectsol"/>
        </div>

        
          
          </div>  
       </div>
       
      
    </div>
  )
}