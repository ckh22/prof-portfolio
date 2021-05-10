import React, {useState, useEffect} from 'react'
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal';
import {Icon, Image} from 'semantic-ui-react'
import Icon2 from '../../Assets/Icon2.png'
import {motion} from 'framer-motion'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}

const Nav = ({setShow, show}) => {
    const {width} = useWindowDimensions();
    const initialNavbar = {
        height: '7vh',
        background: 'white',
        maxHeight: '75px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 15
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
            color: '#e7edec'
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
        <motion.nav style={
                scroll === 0 ? initialNavbar : stickyNavbar
            }
            initial={
                {
                    y: -500,
                    opacity: 0
                }
            }
            animate={
                {
                    y: 0,
                    opacity: 1
                }
            }
            transition={
                {
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.25
                }
        }>
            <a href='#root'>
                <Image src={
                        scroll === 0 ? K : Icon2
                    }
                    style={
                        {
                            width: '1.8em',
                            marginLeft: '3em'
                        }
                    }/>
            </a>
            {
            width > 600 ? <ul>
                <li>
                    <a href="#about"
                        style={
                            scroll !== 0 ? textColor.white : textColor.black
                    }>About</a>
                </li>
                <li>
                    <a href="#skills"
                        style={
                            scroll !== 0 ? textColor.white : textColor.black
                    }>Skills</a>
                </li>
                <li>
                    <a href="#portfolio"
                        style={
                            scroll !== 0 ? textColor.white : textColor.black
                    }>Portfolio</a>
                    <a href="https://blogger.keihartley.com/"
                        style={
                            scroll !== 0 ? textColor.white : textColor.black
                    }>Blogger</a>
                </li>
                <ContactModal open={open}
                    setOpen={setOpen}/>
            </ul> : <Icon name='bars' size='big'
                style={
                    {paddingRight: '2em'}
                }
                link
                onClick={
                    () => setShow(!show)
                }/>
        } </motion.nav>
    )
}

export default Nav
