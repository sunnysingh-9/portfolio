import React from 'react'
import './Skills.scss';


export default function Skills() {
  return (
    <div className='skills' id='portfolio'>
      <div className="topbar">SKILLS</div>
      <div className="section">

      <div className="row1">
        <div className="columb1">
            <img src="assets/html.png" alt="HTML"/>
            <h4>HTML</h4>
            <div className='outerbarhtml'style={{height:'15px' , width:'200px'}}>
              <div className='innerbarhtml' style={{height:'13px' , width:'180px'}}>

              </div>
            </div>
            <h2>80%</h2>
        </div>

        <div className="columb1">
       <img src="assets/css.png" alt="css"/>
        <h4>CSS</h4>
        <div className='outerbarcss'>
              <div className='innerbarcss'>

              </div>
            </div>
            <h2>70%</h2>

       </div>


        <div className="columb1">
        <img src="assets/js.png" alt="js"/>
        <h4>JAVASCRIPT</h4>
        <div className='outerbarjava'>
              <div className='innerbarjava'>

              </div>
            </div>
            <h2>70%</h2>
        </div>

        
        
        </div>

        <div className="row1">

        <div className="columb1">
        <img src="assets/c.png" alt="c"/>
        <h4>C</h4>
        <div className='outerbarc'>
              <div className='innerbarc'>

              </div>
            </div>
            <h2>70%</h2>
        </div>

        <div className="columb1">
        <img src="assets/cpp.png" alt="c++"/>
        <h4>C++</h4>
        <div className='outerbarc'>
              <div className='innerbarc'>

              </div>
            </div>
            <h2>70%</h2>
        </div>

        <div className="columb1">
        <img src="assets/react.png" alt="react"/>
        <h4>REACT JS</h4>
        <div className='outerbarreact'>
              <div className='innerbarreact'>

              </div>
            </div>
            <h2>70%</h2>
        </div>

       

        
          
          </div>

          <div className="row1">
          <div className="columb1">
<img src="assets/node.jpg" alt="node"/>
<h4>NODE JS</h4>
<div className='outerbarnode'>
              <div className='innerbarnode'>

              </div>
            </div>
            <h2>65%</h2>
</div>


<div className="columb1">
<img src="assets/express.png" alt="express"/>
<h4>EXPRESS JS</h4>
<div className='outerbarexpress'>
              <div className='innerbarexpress'>

              </div>
            </div>
            <h2>50%</h2>
</div>

<div className="columb1">
<img src="assets/mongo.png" alt="mongo"/>
<h4>MONGO DB</h4>
<div className='outerbarmongo'>
              <div className='innerbarmongo'>

              </div>
            </div>
            <h2>50%</h2>
</div>



  
  </div>

        



      </div>
      
    </div>
  )
}

