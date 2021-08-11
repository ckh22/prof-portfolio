// import Nav from "./Components/Nav/Nav";
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
// import React, {createRef} from 'react';
// import Skills from "./Pages/Skills";
// import AboutMe from "./Pages/AboutMe";
// import Landing from "./Pages/Landing";
// import Portfolio from "./Pages/Portfolio";
// import {BrowserRouter as Router} from 'react-router-dom'
// import Footer from "./Pages/Footer";
// import DrawerMenu from "./Components/Modal/DrawerMenu";
// import {useState} from 'react'
import { Icon } from 'semantic-ui-react'

function App() {
  // const contextRef = createRef()
  // const [show, setShow] = useState(false)
  return (
    <div style={{ height: '100vh'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}>
        Construction Underway
        <Icon name="wrench" />
      </div>
    </div>

    
    // <Router>
    //     <div className="App"
    //         ref={contextRef}>
    //         <DrawerMenu show={show} setShow={setShow} />
    //         <Nav contextRef={contextRef}
    //             setShow={setShow}
    //             show={show}/>
    //         <Landing/>
    //         <AboutMe/>
    //         <Skills/>
    //         <Portfolio/>
    //         <Footer/>
    //     </div>
    // </Router>
  )
}

export default App
