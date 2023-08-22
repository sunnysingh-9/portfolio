import React  from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills'
import Work from './components/works/Work'
import Testmonials from './components/testmonials/Testmonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Resume from './components/resume/Resume'
import './app.scss';
import  {useState} from 'react'



function App() {
  const [menuOpen ,setmenuOpen] = useState(false);
 
  return (

    <>
  <div className='app'>
 <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
 <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
 <div className="sections">
<Intro/>
<Skills/>
<Work/>
{/* <Testmonials/> */}
<Contact/>
{/* <Resume/> */}
 </div>

 </div>

 </>
 
  );
}

export default App;
