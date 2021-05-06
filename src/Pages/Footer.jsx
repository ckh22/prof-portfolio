import React from 'react'
import {Header, Icon} from 'semantic-ui-react'

const Footer = () => {
    const style = {
        padding: '1em',
        color: '#c2a79f'
    }
    return (
        <section id='footer'>
            <div className="top">
                    <Header content='Clifford Kei Hartley' size='huge' style={style}/>
            </div>
            <div className="middle">
                <Icon name='instagram' link size='big'/>
                <Icon name='github' link size='big'/>
                <Icon name='mail' link size='big'/>
            </div>
            <div className="bottom">
                <Header content='Developed By K.H.' style={style} />
            </div>
        </section>
    )
}

export default Footer
