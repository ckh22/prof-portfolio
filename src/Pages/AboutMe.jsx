import React from 'react'
import {Header, Image, Segment, Container} from "semantic-ui-react";
import osaka from '../Assets/OSAKA.png'

const AboutMe = () => {
    return (
        <section id='about'>

            <Image src={osaka}
                size='big'/>
            <div>
                <Segment>
                    <Header>
                        About Me
                    </Header>
                    <Container text fluid>
                        <p>
                            I’m currently a junior at the University of Washington (UofW) on track to graduate with a BS in Human Centered Design & Engineering (HCDE) and an option in data science. My background in web development, data visualization, and user research provides me with the tools necessary to design and implement with user experience considered at the forefront.

                        </p>
                        <p>
                            Throughout my college career, I’ve successfully completed a software engineering internship, research assistant position developing websites, as well as many personal projects to practice programming.
                        </p>
                    </Container>
                </Segment>
            </div>

        </section>
    )
}

export default AboutMe
