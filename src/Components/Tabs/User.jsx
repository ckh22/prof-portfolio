import React from 'react'
import {Card, Grid, Image} from 'semantic-ui-react'
import Birdio from '../../Assets/Birdio.png'
import Michelin from '../../Assets/Michelin.jfif'
import Rakuten from '../../Assets/Rakuten.png'

const User = () => {
    return (
        <Grid centered>
            <Grid.Row columns={1}>
                <Card link centered>
                    <Image src={Birdio} style={{height: '160px'}}/>
                </Card>
            </Grid.Row>
            <Grid.Row columns={2} verticalAlign='middle'>
                <Grid.Column>
                    <Card link centered>
                        <Image src={Michelin} style={{height: '160px'}} />
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card link centered >
                        <Image src={Rakuten} style={{height: '160px'}} />
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default User
