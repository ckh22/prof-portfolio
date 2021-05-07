import React from 'react'
import {Card, Grid} from 'semantic-ui-react'
import bias from '../../Assets/bias.pdf'
import trail from '../../Assets/trail.pdf'


const Data = () => {
    return (
        <Grid centered>
            <Grid.Row columns={2}
                centered>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card color='blue' link centered header='Gilham Trail Traffic Analysis: Identifying Traffic Patterns' target='_blank'
                        href={trail}/>
                </Grid.Column>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link color='blue' centered header='Sources of Bias in Data: Analysis of Data Quality' target='_blank'
                        href={bias}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link color='blue' centered header='HCDE410 Final Project: Human Data Interaction' meta='in progress'/>
                </Grid.Column>
                <Grid.Column width={4}
                    verticalAlign='middle'>
                    <Card link color='blue' centered header='Flight Database: Microsoft Azure Final Project' href='https://github.com/ckh22/FlightDB/tree/master/hw5' target='_blank'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Data
