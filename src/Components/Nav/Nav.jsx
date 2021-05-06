import React, {useState} from 'react'
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal';
import {Image} from 'semantic-ui-react'
import Icon2 from '../../Assets/Icon2.png'

const Nav = () => {
    const initialNavbar = {
        height: '7vh',
        background: 'white',
        maxHeight: '75px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15,
    }
    const stickyNavbar = {
        height: '7vh',
        maxHeight: '75px',
        background: '#9396e1',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15,
        boxShadow: '0px 5px 10px -2px rgba(0,0,0,0.59)'
    }
    const textColor = {
        white: {
            color: 'white'
        },
        black: {
            color: 'black'
        }
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
                <Image src={scroll === 0 ? K: Icon2}
                    style={
                        {
                            width: '1.8em',
                            marginLeft: '3em'
                        }
                    }/>
            </a>
            <ul>
                <li>
                    <a href="#about" style={scroll !== 0 ? textColor.white: textColor.black} >About</a>
                </li>
                <li>
                    <a href="#skills" style={scroll !== 0 ? textColor.white: textColor.black}>Skills</a>
                </li>
                <li>
                    <a href="#portfolio" style={scroll !== 0 ? textColor.white: textColor.black}>Portfolio</a>
                </li>
                <ContactModal open={open}
                    setOpen={setOpen}/>
            </ul>
        </nav>
    )
}

export default Nav
