import React from 'react'
import {
    Icon,
    Header,
    Grid,
    List,
    Divider,
    Image,
    Segment,
    Container
} from "semantic-ui-react";
import corner from '../Assets/corner.png'
import skills from '../Assets/skills.png'

const Skills = () => {
    return (
        <section id='skills'>
            <Image src={corner}
                className='corner'/>
            <div className="grid-container">
                <div className="flex-container"
                    style={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                }>
                    <Header content='Skills' as='h2'/>
                    <Image src={skills}
                        size='small'/>
                </div>
                <Divider/>
                <Grid columns={3}
                    stackable
                    textAlign='center'
                    verticalAlign='middle'>
                    <Grid.Row centered>
                        <Grid.Column>
                            <Segment className='Outer'>
                                <Container textAlign='center'>
                                    <Header content='Databases'/>
                                    <Icon name='database' size='huge'/>
                                    <List animated>
                                        <List.Item>
                                            +2 years in NoSQL (MongoDB, Firebase)
                                        </List.Item>
                                        <List.Item>
                                            +1 year in SQL (MS Azure, SQLite)
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className='Center' >
                                <Container textAlign='center'>
                                    <Header content='Web Dev'/>
                                    <Icon name='computer' size='huge'/>
                                    <List animated
                                        style={
                                            {color: 'white'}
                                    }>
                                        <List.Item>+2 years in React
                                        </List.Item>
                                        <List.Item>+2 years in HTML/CSS and SCSS
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className='Outer'>
                                <Container textAlign='center'>
                                    <Header content='Languages'/>
                                    <Icon name='code' size='huge'/>
                                    <List animated>
                                        <List.Item>+3 years in Java
                                        </List.Item>
                                        <List.Item>+2 years in JavaScript
                                        </List.Item>
                                        <List.Item>+1 year in Python
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column>
                            <Segment className='Outer'>
                                <Container textAlign='center'>
                                    <Header content='Design' />
                                    <Icon name='paint brush' size='huge'/>
                                    <List animated>
                                        <List.Item>+1 year in Figma
                                        </List.Item>
                                        <List.Item>+1 year in User Research
                                        </List.Item>
                                        <List.Item>+1 year in Prototyping
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className='Center'>
                                <Container textAlign='center'>
                                    <Header content='Data Science'/>
                                    <Icon name='area graph' size='huge'/>
                                    <List animated>
                                        <List.Item>+1 year in R
                                        </List.Item>
                                        <List.Item>+1 year in Plotly & Matplotlib
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment className='Outer'>
                                <Container textAlign='center'>
                                    <Header content='Node.js Tools'/>
                                    <Icon name='wrench' size='huge'/>
                                    <List animated>
                                        <List.Item>
                                            +2 years using Git Terminal
                                        </List.Item>
                                        <List.Item>
                                            +2 years of Redux, Express, and Axios
                                        </List.Item>
                                    </List>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </section>
    )
}

export default Skills
