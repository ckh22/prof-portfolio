import React from 'react'
import {
    Container,
    Button,
    Image,
    Divider,
    Header
} from "semantic-ui-react";
import teamLab from '../Assets/teamlab.png'
import coverLetter from '../Assets/CL.pdf'
import resume from '../Assets/resume.pdf'

const Landing = () => {
    return (
        <section id='landing'>
            <Container text fluid>
                <div className='text-container'>
                    <Header content="Hi! I'm Kei Hartley" size='large'/>
                    <Header content="Specialized in User-Centered Design and Full-stack Development"/>
                </div>
                <div>
                    <Divider/>
                    <Button content='Resume'
                        style={
                            {border: '0.5px solid gray'}
                        }
                        target='_blank'
                        href={resume}/>
                    <Button color='orange' content='Cover Letter' className='hoverButton' target='_blank'
                        href={coverLetter}/>
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
