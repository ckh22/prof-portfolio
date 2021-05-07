import React from 'react'
import {
    Header,
    Image,
    Segment,
    Grid,
    Container,
    Divider,
    Statistic,
    List
} from "semantic-ui-react";
import osaka from '../Assets/OSAKA.png'
import {motion} from 'framer-motion'

const AboutMe = () => {
    const variations = {
        initial: {
            opacity: 0,
            x: -100,
            y: -100
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.5,
                stiffness: 150
            }
        },
        slide: {
            y: -25,
            opacity: 0
        },
        slideIn: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25
            }
        }
    }
    return (
        <section id='about'>
            <motion.div variants={variations}
                initial='slide'
                animate='slideIn'><Header content='About' textAlign='center' size='huge'/></motion.div>
            <Divider/>
            <Grid columns={2}
                stackable>
                <Grid.Column textAlign='center'>
                    <motion.div variants={variations}
                        initial='initial'
                        animate='animate'>
                        <Image src={osaka}
                            avatar
                            size='large'/>
                    </motion.div>
                </Grid.Column>
                <Grid.Column>
                    <Container text fluid>
                        <motion.div variants={variations}
                            initial='slide'
                            animate='slideIn'>
                            <Segment padded='very'>
                                <Header content='Kei Hartley'
                                    subheader={
                                        <Header
                                    content='Human Centered Design & Engineering, UW Seattle'
                                    sub/>
                                    }/>
                                    <p>Expected Graduation Date, June 2022</p>
                                    <p>
                                        During my time at University, I spent a lot of time picking up new tools 
                                        for full-stack development. My experience in UI/UX gives me a unique 
                                        perspective in designing a website from start to finish. Being able to conduct
                                        user research, creating personas and storyboards, assessing information 
                                        archetecture, and most importantly, designing wireframes and prototypes 
                                        is critical in developing a website with UX in focus. 
                                    </p>
                                <Statistic value='3.95' label='Department GPA' text color='purple' horizontal size='small'/>
                                <Divider/>
                                <Grid columns={2}
                                    stackable>
                                    <Grid.Column>
                                        <Header content='Deans List Quarters'/>
                                        <List>
                                            <List.Item>
                                                SP 2020
                                            </List.Item>
                                            <List.Item>
                                                FA 2020
                                            </List.Item>
                                            <List.Item>
                                                WI 2021
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header content='Awards' icon='trophy'/>
                                        <List>
                                            <List.Item>
                                                J.H. & Frances Sargent Scholarship
                                            </List.Item>
                                            <List.Item>
                                                Chester M. Reistad Scholarship
                                            </List.Item>
                                            <List.Item>
                                                UW Academic Scholarship
                                            </List.Item>
                                            <List.Item>
                                                WICMOAA Scholarship
                                            </List.Item>
                                            <List.Item>
                                                WA State Opp. Scholarship
                                            </List.Item>
                                            <List.Item>
                                                Stephen Decatur Award
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </motion.div>
                    </Container>
                </Grid.Column>
            </Grid>
        </section>
    )
}

export default AboutMe
