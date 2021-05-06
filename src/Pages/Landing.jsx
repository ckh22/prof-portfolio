import React from 'react'
import {Container, Button, Image, Divider, Header} from "semantic-ui-react";
import teamLab from '../Assets/teamlab.png'

const Landing = () => {
    return (
        <section id='landing'>
            <Container text>
                <Header content='Hi! My name is Kei Hartley' size='large' />
                <p>I am a <strong>full-stack developer</strong></p>
                <p>Specialized in User Centered Design & Front-end</p>
                <div>
                    <Divider/>
                    <Button content='Resume' style={{border: '0.5px solid gray'}}
                        icon={
                            {name: 'download'}
                        }/>
                    <Button color='orange' content='Cover Letter' className='hoverButton'
                        icon={
                            {name: 'download'}
                        }/>
                </div>
            </Container>
            <Image src={teamLab}
                initial={
                    {x: 100}
                }
                animate={
                    {x: 0}
                }
                transition={
                    {
                        type: "spring",
                        stiffness: 100
                    }
                }
                alt='teamLab'/>
        </section>
    )
}

export default Landing
