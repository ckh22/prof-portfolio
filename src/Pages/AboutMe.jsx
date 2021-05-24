import React from 'react'
import {
    Header,
    Image,
    Segment,
    Grid,
    Container,
    Divider,
    Statistic,
    List,
    Icon
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
            <Grid columns={2}
                stackable
                verticalAlign='middle'>
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
                                <Header content='About' textAlign='center' size='huge'/>
                                <hr/>
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
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header content='Deans List Quarters' textAlign='center'/>
                                            <hr/>
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
                                            <Header content='Awards' textAlign='center'/>
                                            <hr/>
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
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header content='Socials' textAlign='center'/>
                                            <hr/>
                                            <Container textAlign='center'>
                                                <a href="https://github.com/ckh22" target='_blank' rel="noreferrer">
                                                    <Icon name='github' size='big'/></a>
                                                <a href="https://www.instagram.com/cliff_hartl/" target='_blank' rel="noreferrer">
                                                    <Icon name='instagram' size='big'/></a>
                                                <a href="https://www.facebook.com/profile.php?id=100011729496904" target='_blank' rel="noreferrer">
                                                    <Icon name='facebook' size='big'/></a>
                                                <a href="https://www.linkedin.com/in/clifford-hartley/" target='_blank' rel="noreferrer">
                                                    <Icon name='linkedin' size='big'/></a>
                                            </Container>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header content='Previous Work' textAlign='center'/>
                                            <hr/>
                                            Software Engineering Internship
                                            <br />
                                            Company: VillaVox
                                            <br />
                                            <a href="https://villavox.com/" target='_blank' rel="noreferrer">Link</a>
                                            <Divider hidden />
                                            Research Assistant
                                            <br />
                                            Company: Sensors, Energy, and Automation Laboratory (SEAL)
                                            <br />
                                            <a href="https://uwseal.org/" target='_blank' rel="noreferrer">Link</a>
                                        </Grid.Column>
                                    </Grid.Row>
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
