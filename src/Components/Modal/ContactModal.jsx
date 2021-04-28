import React from 'react'
import {Modal, Button, Form} from 'semantic-ui-react'

const ContactModal = ({open, setOpen}) => {
    return (
        <Modal onClose={
                () => setOpen(false)
            }
            onOpen={
                () => setOpen(true)
            }
            trigger={
                <Button>Contact</Button>
            }
            open={open}
            closeIcon
            dimmer='blurring'
            size='large'>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content>

                <Form style={
                    {padding: '3em'}
                }>
                    <Form.Group unstackable
                        widths={2}>
                        <Form.Input label='First name' placeholder='First name'/>
                        <Form.Input label='Last name' placeholder='Last name'/>
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Address' placeholder='Address'/>
                        <Form.Input label='Phone' placeholder='Phone'/>
                    </Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions'/>
                    <Button type='submit' color='brown' floated='right'>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default ContactModal
