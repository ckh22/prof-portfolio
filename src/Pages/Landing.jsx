import React from 'react'
import {
    Icon,
    Container,
    Button,
    Image,
    Divider
} from "semantic-ui-react";
import teamLab from '../Assets/teamlab.png'

const Landing = () => {
    return (
        <section id='landing'>
            <div className="flex-landing">
                <Container text>
                    <p>Hello!</p>
                    <p>I'm Kei Hartley, a software engineer.</p>
                    <p>Specialized in web dev and data visualization</p>
                </Container>
                <div>

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
            </div>


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
