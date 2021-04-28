import React from 'react'
import {
    Icon,
    Card,
    Header,
    Grid,
    Container,
    Divider
} from "semantic-ui-react";

const Skills = () => {
    return (
        <section id='skills'>
            <Container text textAlign='center'>
                <Header content='Skills' as='h2'/>
                <Header content="csanoi dionsa dshjioao jidsajoid jsiadsoijadoji a" as='h3'/>
            </Container>
            <Divider/>
            <Grid columns={3}
                relaxed
                textAlign='center'>
                <Grid.Row>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Card.Content textAlign='center'>
                                <Card.Header content='Header'/>
                                <Icon name='database' size='huge' color='teal'/>
                                <Card.Meta content='meta'/>
                                <Card.Description content='description'/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    )
}

export default Skills
