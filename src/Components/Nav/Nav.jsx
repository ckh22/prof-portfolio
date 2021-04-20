import React from 'react'
import {motion} from "framer-motion"
import K from '../../Assets/K.png'

const Nav = () => {
    const variants = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    }
    return (<motion.nav initial="hidden" animate="visible"
        variants={variants}>
        <div><img src={K} alt="K"/></div>
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

                <button>
                    Contact
                </button>

        </ul>
    </motion.nav>)
}

export default Nav
