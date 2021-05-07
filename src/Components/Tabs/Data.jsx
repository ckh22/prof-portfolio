import React from 'react'
import {Card, Grid} from 'semantic-ui-react'
import bias from '../../Assets/bias.pdf'
import trail from '../../Assets/trail.pdf'
import {motion} from "framer-motion";


const Data = () => {
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
        hidden: {
            opacity: 0
        }
    };
    const item = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: -100
        }
    };
    return (
        <motion.div className='pj-container' initial="hidden" animate="visible"
            variants={list}>
            <Grid centered>
                <Grid.Row columns={2}
                    centered>
                    <Grid.Column largeScreen='four' mobile='seven' computer='four' verticalAlign='middle'>
                        <motion.div variants={item}><Card color='blue' link centered header='Gilham Trail Traffic Analysis: Identifying Traffic Patterns' target='_blank'
                                href={trail}/></motion.div>
                    </Grid.Column>
                    <Grid.Column largeScreen='four' mobile='seven' computer='four' verticalAlign='middle'>
                        <motion.div variants={item}><Card link color='blue' centered header='Sources of Bias in Data: Analysis of Data Quality' target='_blank'
                                href={bias}/></motion.div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column largeScreen='four' mobile='seven' computer='four' verticalAlign='middle'>
                        <motion.div variants={item}><Card link color='blue' centered header='HCDE410 Final Project: Human Data Interaction' meta='in progress'/></motion.div>
                    </Grid.Column>
                    <Grid.Column largeScreen='four' mobile='seven' computer='four' verticalAlign='middle'>
                        <motion.div variants={item}><Card link color='blue' centered header='Flight Database: Microsoft Azure Final Project' href='https://github.com/ckh22/FlightDB/tree/master/hw5' target='_blank'/></motion.div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </motion.div>
    )
}

export default Data
