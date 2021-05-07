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
                <Header content='Clifford Kei Hartley' size='huge'
                    style={style}/>
            </div>
            <div className="middle">
                <a href='https://www.instagram.com/cliff_hartl/' target='_blank'>
                    <Icon name='instagram' size='big' link/>
                </a>
                <a href='https://github.com/ckh22' target='_blank'>
                    <Icon name='github' size='big' link/>
                </a>
                <a href='https://www.linkedin.com/in/clifford-hartley/' target='_blank'>
                    <Icon name='linkedin' size='big' link/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100011729496904' target='_blank'>
                    <Icon name='facebook' size='big' link />
                </a>
            </div>
            <div className="bottom">
                <Header content='Developed By K.H.'
                    style={style}/>
            </div>
        </section>
    )
}

export default Footer
