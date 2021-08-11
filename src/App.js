import Nav from "./Components/Nav/Nav";
import "./App.scss"
import 'semantic-ui-css/semantic.min.css'
import React, {createRef} from 'react';
import Skills from "./Pages/Skills";
import AboutMe from "./Pages/AboutMe";
import Landing from "./Pages/Landing";
import Portfolio from "./Pages/Portfolio";
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from "./Pages/Footer";
import {useState} from 'react'
import DrawerMenu from "./Components/Modal/DrawerMenu";
import { Icon } from "semantic-ui-react";

function App() {
    const contextRef = createRef()
    const [show, setShow] = useState(false)
    return (
        <div>
            Construction underway!! <Icon name='wrench' />
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
    );
}

export default App;
