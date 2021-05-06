import React, { useState } from 'react'
import {Button} from 'semantic-ui-react'


const Portfolio = () => {
    const types = ['web', 'user', 'data']
    const [active, setActive] = useState(types[1])
    return (
        <section id='portfolio'>
            <div> {
                types.map(type => (
                    <Button content={type}
                        circular
                        color={
                            active === type ? 'purple' : null
                        }
                        key={type}
                        active={
                            active === type
                        }
                        onClick={
                            () => setActive(type)
                        } />
                ))
            }
            </div>
            {
                active === 'data' && <div>data</div>
            }
            {
                active === 'user' && <div>user</div>
            }
            {
                active === 'web' && <div>web</div>
            }
        </section>
    )
}

export default Portfolio
