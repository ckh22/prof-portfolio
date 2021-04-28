import React from 'react'
import {
    Icon,
    Card,
    Header,
    CardHeader,
    CardContent,
    CardDescription
} from "semantic-ui-react";

const Skills = () => {
    return (
        <section id='skills'>
            <Header as='h2'>Skills</Header>
            <Header as='h3'>Lorem ipsum dolor sit amet, ad nec tantas tincidunt.</Header>
            <div className='flex-div'>
                <Card>
                    <CardHeader textAlign='center'>
                        Text
                    </CardHeader>
                    <CardContent textAlign='center'>
                        <Icon name='database' size='huge'/>
                    </CardContent>
                    <CardDescription textAlign='center'>
                        Lorem ipsum dolor sit amet, ad nec tantas tincidunt, cu qui commodo voluptatibus necessitatibus. Elit ubique ad qui.
                    </CardDescription>
                </Card>
                <Card>
                    <CardHeader textAlign='center'>
                        Text
                    </CardHeader>
                    <CardContent textAlign='center'>
                        <Icon name='computer' size='huge'/>
                    </CardContent>
                    <CardDescription textAlign='center'>
                        Lorem ipsum dolor sit amet, ad nec tantas tincidunt, cu qui commodo voluptatibus necessitatibus. Elit ubique ad qui.
                    </CardDescription>
                </Card>
                <Card>
                    <CardHeader textAlign='center'>
                        Text
                    </CardHeader>
                    <CardContent textAlign='center'>
                        <Icon name='edit' size='huge'/>
                    </CardContent>
                    <CardDescription textAlign='center'>
                        Lorem ipsum dolor sit amet, ad nec tantas tincidunt, cu qui commodo voluptatibus necessitatibus. Elit ubique ad qui.
                    </CardDescription>
                </Card>
            </div>
        </section>
    )
}

export default Skills
