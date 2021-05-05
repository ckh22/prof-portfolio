import React, {useState} from 'react'
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal';
import {Image} from 'semantic-ui-react'

const Nav = () => {
    const initialNavbar = {
        height: '7vh',
        background: 'white',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15,
        transition: 'background 0.5s'
    }

    const stickyNavbar = {
        height: '7vh',
        background: '#bbb6c4',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15,
        transition: 'background 0.5s',
        boxShadow: '0px 5px 10px -2px rgba(0,0,0,0.59)'
    }
    const [scroll, setScroll] = useState(0)
    window.onscroll = function () {
        setScroll(window.pageYOffset)
    };
    const [open, setOpen] = useState(false);
    return (
        <nav style={
            scroll === 0 ? initialNavbar : stickyNavbar
        }>
            <a href='#root'>
                <Image src={K}
                    style={
                        {
                            width: '1.8em',
                            marginLeft: '3em'
                        }
                    }/>
            </a>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <ContactModal open={open}
                    setOpen={setOpen}/>

            </ul>
        </nav>
    )
}

export default Nav
