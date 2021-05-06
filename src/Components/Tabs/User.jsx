import React from 'react'
import {Card, Grid, Image} from 'semantic-ui-react'
import Birdio from '../../Assets/Birdio.png'
import Michelin from '../../Assets/Michelin.jfif'
import Rakuten from '../../Assets/Rakuten.png'

const User = () => {
    return (
        <Grid centered>
            <Grid.Row columns={1}>
                <Grid.Column width={4}>
                    <Card link centered image={<Image src={Birdio} style={{height: '160px'}}/>} header='Birdio Project' description='Final Project for HCDE 308: Intro to User Centered Design' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} verticalAlign='middle'>
                <Grid.Column width={4}>
                    <Card link centered image={<Image src={Michelin} style={{height: '160px'}} />} header='UI Report: Michelin Group' description='Large Project for HCDE___: ____ ____ ___ and reviewed whether the website provided a good experience to the user.' />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card link centered image={<Image src={Rakuten} style={{height: '160px'}} />} header='Cross-Cultural Report' description='Large Project for HCDE__: ____ _ ___ and analyzed the extent of change in design due to cultural influences.' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default User
