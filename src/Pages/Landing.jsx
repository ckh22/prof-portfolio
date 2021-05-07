import React from 'react'
import {
    Container,
    Button,
    Image,
    Divider,
    Header
} from "semantic-ui-react";
import teamLab from '../Assets/teamlab.png'
import coverLetter from '../Assets/CL.pdf'
import resume from '../Assets/resume.pdf'
import {motion} from 'framer-motion'

const Landing = () => {
    const container = {
        hidden: {
            opacity: 0.35,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.5,
                type: 'Spring',
            }
        }
    }
    

    const item = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    }

    const variants = {
        initial: {
            x: 100
        },
        animate: {
            x: 0,
            transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.25
            }
        }
    }
    return (
        <section id='landing'>
                <Container text fluid>
                <motion.div className="framer-container" variants={container}
    initial="hidden"
    animate="show">
                    <motion.div variants={item} className='text-container'>
                        <Header content="Hi! I'm Kei Hartley" size='large'/>
                        <Header content="Specialized in User-Centered Design and Full-stack Development"/>
                    </motion.div>
                    <motion.div variants={item}>
                        <Divider/>
                        <Button content='Resume'
                            style={
                                {border: '0.5px solid gray'}
                            }
                            target='_blank'
                            href={resume}/>
                        <Button color='orange' content='Cover Letter' className='hoverButton' target='_blank'
                            href={coverLetter}/>
                    </motion.div>
                    </motion.div>
                </Container>
            <motion.div className="image-container"
                variants={variants}
                initial='initial'
                animate='animate'>
                <Image src={teamLab}
                    initial={
                        {x: 100}
                    }
                    animate={
                        {x: 0}
                    }
                    transition={
                        {
                            type: "spring",
                            stiffness: 100
                        }
                    }
                    alt='teamLab'/>
            </motion.div>
        </section>
    )
}

export default Landing
