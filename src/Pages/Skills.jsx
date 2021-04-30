import React from 'react'
import {
    Icon,
    Card,
    Header,
    Grid,
    Container,
    List,
    Segment
} from "semantic-ui-react";

const Skills = () => {
    return (
        <section id='skills'>
            <Segment>
                <Container text textAlign='center'>
                    <Header content='Skills' as='h2'/>
                </Container>
            </Segment>
            <Grid columns={3}
                relaxed
                textAlign='center'>
                <Grid.Row centered>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Databases'/>
                                <Icon name='database' size='huge' bordered/>
                                <Card.Meta content='MS Azure, MongoDB, Firebase'/>
                                <Card.Description content='Implemented numerous NoSQL and SQL databases for personal, university, and research projects. '/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Web Dev'/>
                                <Icon name='computer' size='huge' bordered/>
                                <Card.Meta content='React, Angular'/>
                                <Card.Description content='Created many websites using React or Angular and have experience prototyping websites in Figma and Adobe XD. '/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Languages'/>
                                <Icon name='code' size='huge' bordered/>
                                <Card.Meta content='JavaScript, Java, Python, HTML/CSS, SQL'/>
                                <Card.Description>
                                    <List animated>
                                        <List.Item>+3 years in Java
                                        </List.Item>
                                        <List.Item>+2 years in JavaScript
                                        </List.Item>
                                        <List.Item>+1 years in Python
                                        </List.Item>
                                    </List>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Design'/>
                                <Icon name='paint brush' size='huge' bordered/>
                                <Card.Meta content='Figma'/>
                                <Card.Description content='Experience in conducting user research, producing personas and storyboards, flushing out the information archetecture, creating wireframes and lofi/hifi prototypes.'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Data Science'/>
                                <Icon name='area graph' size='huge' bordered/>
                                <Card.Meta content='R or Python (ggplot2 or Plotly)'/>
                                <Card.Description content='Proficient in retrieving data from an API, data scrubbing, analysis of data, and producing visual illustrations to support the analysis.'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Node.js Tools'/>
                                <Icon name='wrench' size='huge' bordered/>
                                <Card.Meta content='Libraries accessed from Node.js'/>
                                <Card.Description content='Experience in implementing a large range of Node.js libraries: Including Redux, Bootstrap, Material-UI, Express, Apollo-server, and Axios, and more.'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    )
}

export default Skills
