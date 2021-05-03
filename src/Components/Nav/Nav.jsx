import React, { useState } from 'react'
import { motion } from "framer-motion"
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal';
import { Image } from 'semantic-ui-react'

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
        background: '#5c36a9',
        color: 'white',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15,
        transition: 'background 0.5s'
    }
    const [scroll, setScroll] = useState(0)
    window.onscroll = function () {
        setScroll(window.pageYOffset)
        console.log(scroll)
    };
    const [open, setOpen] = useState(false);
    const variants = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    }
    return (
        <nav variants={variants} style={scroll === 0 ? initialNavbar : stickyNavbar}>
            <a href='#root'>
                <Image src={K} style={{ width: '2.5em', paddingLeft: '1em' }} />
            </a>
            <motion.ul variants={variants}
                initial='hidden'
                animate='visible'>
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
                    setOpen={setOpen} />

            </motion.ul>
        </nav>
    )
}

export default Nav
