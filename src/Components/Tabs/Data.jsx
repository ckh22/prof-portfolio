import React from 'react'
import {Card, Grid} from 'semantic-ui-react'


const Data = () => {
    return (
        <Grid centered>
            <Grid.Row columns={2}
                centered>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link centered header='Gilham Trail Traffic Analysis: Identifying Traffic Patterns'/>
                </Grid.Column>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link centered header='Sources of Bias in Data: Analysis of Data Quality'/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link centered header='HCDE410 Final Project: Human Data Interaction'/>
                </Grid.Column>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link centered header='Flight Database: Microsoft Azure Final Project'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Data
