import React from 'react'
import {
    Header,
    Image,
    Segment,
    Grid,
    Container,
    Divider
} from "semantic-ui-react";
import osaka from '../Assets/OSAKA.png'

const AboutMe = () => {
    return (
        <section id='about'>
            <Header content='About' textAlign='center'/>
            <Divider />
            <Grid columns={2} divided>
                <Grid.Column textAlign='center'>
                    <Image src={osaka}
                        avatar
                        size='large'/>
                </Grid.Column>
                <Grid.Column>
                    <Container text fluid>
                        <Segment padded='very'>
                            <p>Kei Hartley</p>
                            <Divider />
                            <p>Human Centered Design & Engineering, University of Washington (UofW)</p>
                            <p>Expected Graduation Date, June 2022.</p>
                            <p>Full-stack Developer</p>
                        </Segment>
                    </Container>
                </Grid.Column>
            </Grid>
        </section>
    )
}

export default AboutMe
