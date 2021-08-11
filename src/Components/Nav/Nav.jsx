import React, { useState, useEffect } from 'react'
import K from '../../Assets/K.png'
import ContactModal from '../Modal/ContactModal'
import { Icon, Image } from 'semantic-ui-react'
// import Icon2 from '../../Assets/Icon2.png'
import { motion } from 'framer-motion'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowDimensions
}

const Nav = ({ setShow, show }) => {

  const [scrollState, setScrollState] = useState("top")

  let listener = null
  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  const { width } = useWindowDimensions()
  const [open, setOpen] = useState(false)
  return (
    <motion.nav
      initial={{
        y: -500,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        bounce: 0.25,
        duration: 0.25,
      }}
    >
      <a href="#root">
        <Image src={K} />
      </a>
      {width > 600 ? (
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
          <li>
            <a href="https://blogger.keihartley.com/">Blogger</a>
          </li>
          <ContactModal open={open} setOpen={setOpen} />
        </ul>
      ) : (
        <Icon name="bars" size="big" link onClick={() => setShow(!show)} />
      )}{' '}
    </motion.nav>
  )
}

export default Nav
