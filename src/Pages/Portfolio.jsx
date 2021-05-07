import React, {useState} from 'react'
import {Button} from 'semantic-ui-react'
import Data from '../Components/Tabs/Data'
import User from '../Components/Tabs/User'
import Web from '../Components/Tabs/Web'


const Portfolio = () => {
    const types = ['Web Development', 'UI & UX', 'Data Analytics']
    const [active, setActive] = useState(types[1])
    return (
        <section id='portfolio'>
            <div className='buttonGroup'>
                {
                types.map(type => (
                    <Button content={type}
                        circular
                        color={
                            active === type && active === 'Web Development' ? 'teal' : active === type && active === 'UI & UX' ? 'purple' : active === type && active === 'Data Analytics' ? 'blue' : null
                        }
                        key={type}
                        active={
                            active === type
                        }
                        onClick={
                            () => setActive(type)
                        }/>
                ))
            } </div>
           {
                active === 'Data Analytics' && <Data/>
            }
                {
                active === 'UI & UX' && <User/>
            }
                {
                active === 'Web Development' && <Web/>
            } 
        </section>
    )
}

export default Portfolio
