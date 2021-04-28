import React, {useState} from 'react'
import {motion} from "framer-motion"
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal';
import {Sticky} from 'semantic-ui-react';

const Nav = ({contextRef}) => {
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
        <Sticky context={contextRef}>
            <nav style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1em'
                    }
                }
                variants={variants}>

                <div><a href="#root"><img src={K}
                        alt="K"/></a></div>


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
                        setOpen={setOpen}/>

                </motion.ul>
            </nav>
        </Sticky>
    )
}

export default Nav
