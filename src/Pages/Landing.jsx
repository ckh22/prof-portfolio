import React from 'react'
import {Container, Button, Image, Divider} from "semantic-ui-react";
import teamLab from '../Assets/teamlab.png'

const Landing = () => {
    return (
        <section id='landing'>

            <Container text>
                Hello!
                <br/>
                I'm Kei Hartley, a software engineer.
                <br/>
                Specialized in web dev and data visualization
                <div>
                    <Divider/>
                    <Button content='Resume'
                        icon={
                            {
                                color: 'white',
                                name: 'download'
                            }
                        }/>

                    <Button content='Cover Letter'
                        icon={
                            {
                                color: 'white',
                                name: 'download'
                            }
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
