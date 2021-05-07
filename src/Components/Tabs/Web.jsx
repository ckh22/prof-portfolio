import React from 'react'
import {Card, Grid} from 'semantic-ui-react'

const Web = () => {
    return (
        <Grid centered>
            <Grid.Row>
                <Card link header='Sudoku Project' href='https://github.com/ckh22/SUDOKU_Proj' target='_blank' color='teal'/>
            </Grid.Row>
            <Grid.Row>
                <Card header='Stock Chat' link href='https://github.com/ckh22/hcde438-hw/tree/master/final-proj' target='_blank' color='teal'/>
            </Grid.Row>
            <Grid.Row>
                <Card header='Spotify Lyrics' link href='https://github.com/ckh22/bug-free-guacamole' target='_blank' color='teal'/>
            </Grid.Row>
            <Grid.Row>
                <Card header='Blogger' link href='https://github.com/ckh22/Blogger' target='_blank' color='teal'/>
            </Grid.Row>
            <Grid.Row>
                <Card header='VillaVox' link href='https://villavox.com' target='_blank' color='teal'/>
            </Grid.Row>
            <Grid.Row>
                <Card header='Revents' link href='https://github.com/ckh22/revents' target='_blank' color='teal'/>
            </Grid.Row>

        </Grid>
    )
}

export default Web
