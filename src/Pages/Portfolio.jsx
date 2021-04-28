import React from 'react'
import {Grid, Tab, Image, Card} from 'semantic-ui-react'
import placeholder from '../Assets/image.png'

const panes = [
    {
        menuItem: 'Data Science',
        render: () => <Tab.Pane>
            <Grid verticalAlign='middle'
                columns={4}
                centered>
                <Grid.Row>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                        <br/>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    }, {
        menuItem: 'Web Design',
        render: () => <Tab.Pane>
            <Grid verticalAlign='middle'
                columns={4}
                centered>
                <Grid.Row>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                        <br/>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    }, {
        menuItem: 'User Design',
        render: () => <Tab.Pane>
            <Grid verticalAlign='middle'
                columns={4}
                centered>
                <Grid.Row>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                        <br/>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color='violet' href='#' target="_blank">
                            <Image src={placeholder}/>
                            <Card.Header>Header</Card.Header>
                            <Card.Meta>Meta</Card.Meta>
                            <Card.Description>
                                <p>Description</p>
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    },
]

const Portfolio = () => {
    console.log(panes)
    return (
        <section id='portfolio'>
            <Tab panes={panes}/>
        </section>
    )
}

export default Portfolio
