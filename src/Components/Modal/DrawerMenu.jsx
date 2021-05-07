import React, {useState} from 'react'
import {Drawer} from '@material-ui/core';
import {Icon, List} from "semantic-ui-react";
import ContactModal from './ContactModal';

const DrawerMenu = ({show, setShow}) => {
    const [open, setOpen] = useState(false);
    function handleClose() {
        setShow(!show)
    }
    return (
        <Drawer open={show}
            anchor='left'
            onClose={
                () => setShow(!show)
        }>
            <Icon name='cancel'
                style={
                    {
                        position: 'absolute',
                        right: '0',
                        top: '5px'
                    }
                }
                size='big'
                link
                onClick={
                    () => handleClose()
                }/>
            <List animated celled relaxed
                style={
                    {
                        width: '100vw',
                        padding: '2em',
                        marginTop: '3em'
                    }
            }>
                <List.Item as='a' header='Home' icon='home' href=''
                    onClick={
                        () => handleClose()
                    }/>
                <List.Item as='a' header='About' icon='address card' href='#about'
                    onClick={
                        () => handleClose()
                    }/>
                <List.Item as='a' header='Skills' icon='code' href='#skills'
                    onClick={
                        () => handleClose()
                    }/>
                <List.Item as='a' header='Portfolio' icon='suitcase' href='#portfolio'
                    onClick={
                        () => handleClose()
                    }/>
                <ContactModal open={open}
                    setOpen={setOpen}/>
            </List>
        </Drawer>
    )
}

export default DrawerMenu
