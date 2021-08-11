import React, {useState} from 'react'
import {Button, Grid, Header, Icon} from 'semantic-ui-react'
import Data from '../Components/Tabs/Data'
import User from '../Components/Tabs/User'
import Web from '../Components/Tabs/Web'


const Portfolio = () => {
    const types = ['UI & UX', 'Web Dev', 'Data Analytics']
    const [active, setActive] = useState(types[1])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    };
    return (
        <section id='portfolio'>
            <Grid relaxed>
                <Grid.Row centered
                    style={
                        {marginTop: '4vh'}
                }>
                    {
                    types.map(type => (
                        <Button content={type}
                            style={
                                {margin: '1em'}
                            }
                            circular
                            color={
                                active === type && active === 'Web Dev' ? 'teal' : active === type && active === 'UI & UX' ? 'purple' : active === type && active === 'Data Analytics' ? 'blue' : null
                            }
                            key={type}
                            active={
                                active === type
                            }
                            onClick={
                                () => setActive(type)
                            }/>
                    ))
                } </Grid.Row>
                <Grid.Row centered>
                    {
                    active === 'Data Analytics' && <Data/>
                }
                    {
                    active === 'UI & UX' && <User/>
                }
                    {
                    active === 'Web Dev' && <Web/>
                } 
                </Grid.Row>
            </Grid>
            <div className="scrollup">
                <Header content='Scroll To Top' color='violet' style={{paddingBottom: '0.5em'}} />
                <Icon name='arrow alternate circle up outline' color='violet' size='huge' style={{color: 'gray'}} link onClick={() => scrollToTop()}/>
            </div>
        </section>
    )
}

export default Portfolio
