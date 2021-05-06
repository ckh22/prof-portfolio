import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const Web = () => {
    return (
        <Grid centered>
            <Grid.Row>
                <Card link header='Sudoku Project' />
            </Grid.Row>
            <Grid.Row>
                <Card header='Stock Chat' link  />
            </Grid.Row>
            <Grid.Row>
                <Card header='Spotify Lyrics' link />
            </Grid.Row>
            <Grid.Row>
                <Card header='Blogger' link />
            </Grid.Row>
            <Grid.Row>
                <Card header='VillaVox' link />
            </Grid.Row>
        </Grid>
    )
}

export default Web
