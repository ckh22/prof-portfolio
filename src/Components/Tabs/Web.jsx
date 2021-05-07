import React from 'react'
import {Card, Grid, Header} from 'semantic-ui-react'

const Web = () => {
    return (
        <Grid centered>
            <Grid.Row columns={2}>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card description="Developed a full-stack application to crease a streamlined system for researchers to keep their team leaders updated on their current progress." link header='Sudoku Project' href='https://github.com/ckh22/SUDOKU_Proj' target='_blank' color='teal' extra={<div><Header icon='wrench' content='React, Google Firebase, Formik, Redux' /></div>}/>
                </Grid.Column>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card description='Using the Morning Star API, I created an application that allows users to chat with other users on high volume and active stocks. The chat component is managed through Firebase Firestore.' header='Stock Chat' link href='https://github.com/ckh22/hcde438-hw/tree/master/final-proj' target='_blank' color='teal' extra={<div><Header icon='wrench' content='Material-UI, Axios, Firebase, SCSS, Firestore, and Redux' /></div>}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card description='Blogger was my first project past HTML/CSS, and used Angular to create a basic Blogger than handles posts with images and imbedded videos. ' extra={<div><Header icon='wrench' content='Angular, Bcrypt, Express, MongoDB' /></div>} header='Blogger' link href='https://github.com/ckh22/Blogger' target='_blank' color='teal'/>
                </Grid.Column>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card header='VillaVox' link href='https://villavox.com' target='_blank' color='teal' extra=''/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card header='Spotify Lyrics' link href='https://github.com/ckh22/bug-free-guacamole' target='_blank' color='teal' extra=''/>
                </Grid.Column>
                <Grid.Column width={3}
                    verticalAlign='middle'>
                    <Card header='Revents' link href='https://github.com/ckh22/revents' target='_blank' color='teal' extra=''/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Web
