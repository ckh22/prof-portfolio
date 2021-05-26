import React from 'react'
import {Card, Grid, Icon, Image, Popup, } from 'semantic-ui-react'
import Birdio from '../../Assets/Birdio.png'
import Michelin from '../../Assets/Michelin.jfif'
import Rakuten from '../../Assets/Rakuten.png'
import cc from '../../Assets/crossCultural_report.pptx'
import michelinPDF from '../../Assets/michelin.pdf'
import { motion } from "framer-motion";


const User = () => {
    const list = {
        visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.3 }
        },
        hidden: { opacity: 0 }
    };
    
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    };

    
    return (
        <motion.div className='pj-container' initial="hidden" animate="visible" variants={list}>
            <Grid centered>
                <Grid.Row columns={1}>
                    <Grid.Column mobile='sixteen' largeScreen='four'>
                        <motion.div variants={item}>
                            <Popup
                            position='bottom center'
                            trigger={
                                <Card link centered image={<Image src={Birdio} style={{height: '160px'}}/>} header='Birdio Project' description='Final Project for HCDE 308: Intro to User Centered Design' color='purple' href='https://birdiohcde.wixsite.com/birdio/' target='_blank' />
                            }
                        >
                            <Popup.Header><Icon name='globe' />Go to Website</Popup.Header>
                            </Popup>
                        </motion.div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} verticalAlign='middle'>
                    <Grid.Column mobile='seven' largeScreen='four'>
                        <motion.div variants={item}>
                            <Popup
                                position='bottom center'
                                trigger={
                                    <Card link centered image={<Image src={Rakuten} style={{height: '160px'}} />}  href={cc}  header='Cross-Cultural Report' description='Large Project for HCDE__: ____ _ ___ and analyzed the extent of change in design due to cultural influences.' color='purple'  />
                                }
                            >
                                <Popup.Header><Icon name='download' />Download PowerPoint</Popup.Header>
                            </Popup>
                        </motion.div>
                    </Grid.Column>
                    <Grid.Column mobile='seven' largeScreen='four'>
                        <motion.div variants={item}>
                            <Popup
                                position='bottom center'
                                trigger={
                                    <Card link centered image={<Image src={Michelin} style={{height: '160px'}} />} header='UI Report: Michelin Group' description='Large Project for HCDE___: ____ ____ ___ and reviewed whether the website provided a good experience to the user.' href={michelinPDF} color='purple' target='_blank'  />
                                }
                            >
                                <Popup.Header><Icon name='file pdf'/>View PDF</Popup.Header>
                            </Popup>
                        </motion.div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </motion.div>
    )
}

export default User
