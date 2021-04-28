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

function App() {
    const contextRef = createRef()
    return (
        <Router>
            <div className="App"
                ref={contextRef}>
                <Nav contextRef={contextRef}/>
                <Landing/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
