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

const AboutMe = () => {
    return (
        <section id='about'>
            <Header content='About' textAlign='center'/>
            <Divider />
            <Grid columns={2} stackable>
                <Grid.Column textAlign='center'>
                    <Image src={osaka}
                        avatar
                        size='large'/>
                </Grid.Column>
                <Grid.Column>
                    <Container text fluid>
                        <Segment padded='very'>
                            <Header content='Kei Hartley' dividing />
                            <Divider />
                            <p>Human Centered Design & Engineering, University of Washington (UofW)</p>
                            <p>Expected Graduation Date, June 2022.</p>
                            <p>Full-stack Developer</p>
                            <Statistic value='3.95' label='Department GPA' text color='purple' horizontal size='small' />
                            <Header content='Deans List Quarters' />
                            <List animated bulleted >
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
                        </Segment>
                    </Container>
                </Grid.Column>
            </Grid>
        </section>
    )
}

export default AboutMe
